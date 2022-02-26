import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { SlideData, Slide, Slides } from '@app/core/models/slide.interfaces';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss'],
})
export class SlidesFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  public isLoading: boolean = false;
  public Editor = ClassicEditor;
  public config = { placeholder: 'Descripción' };
  public orderMessage: string = 'Debe asignar el orden de la imágen';
  public uploadedFile: File | null;
  public slideData: SlideData;
  public imageUrl: string;
  public edit: boolean = false;
  public orders: number[] = [];
  public dbOrder: number;
  public url: string = 'http://ongapi.alkemy.org/api/slides';
  public base64Image: string | ArrayBuffer | null;
  public slideId: number;

  slideForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    order: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private httpService: HttpService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadSlide();
    this.slideForm.markAllAsTouched();
  }

  onSelect(event) {
    if (!event.currentFiles[0]) return;
    let file = event.currentFiles[0];
    if (file.type === 'image/jpeg') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result;
      };
      this.uploadedFile = file;
      this.slideForm.controls['image'].setValue(file ? file.name : '');
    }
  }

  onRemove() {
    this.slideForm.get('image')?.setValue('');
    this.base64Image = '';
    this.uploadedFile = null;
  }

  invalidField(field: string) {
    return this.slideForm.get(field)?.invalid && this.slideForm.get(field)?.touched;
  }

  loadSlide() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    if (id!) {
      let url = `${this.url}/${id}`;
      this.httpService.get<Slide>(url).subscribe((resp) => {
        const { success, data } = resp;
        if (success && data.id) {
          this.slideForm.get('name')?.setValue(data.name);
          this.slideForm.get('order')?.setValue(data.order);
          this.slideForm.get('description')?.setValue(data.description);
          this.imageUrl = resp.data.image;
          this.dbOrder = resp.data.order;
          this.slideId = resp.data.id;
          if (this.imageUrl) {
            this.slideForm.get('image')?.setErrors(null);
            this.edit = true;
          }
          this.getOrders();
        }
      });
    } else {
      this.edit = false;
    }
  }

  getOrders() {
    this.httpService.get<Slides>(this.url).subscribe((resp) => {
      let data: SlideData[] = resp.data;
      data.map((slide) => {
        if (slide.order != this.dbOrder) {
          this.orders.push(slide.order);
        }
      });
    });
  }

  orderError(event) {
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 0) {
      this.orderMessage = 'Debe asignar el órden de la imágen, debe ser un número mayor a 0';
      this.slideForm.get('order')?.setErrors({ incorrect: true });
    } else {
      if (this.orders.includes(value) && value != this.dbOrder && value != NaN) {
        this.slideForm.get('order')?.setErrors({ incorrect: true });
        this.orderMessage = `El orden debe ser distinto a  (${this.orders.join(', ')})`;
      } else {
        this.slideForm.get('order')?.setErrors(null);
      }
    }
  }

  submitForm() {
    this.slideForm.markAllAsTouched();
    if (this.slideForm.valid) {
      this.isLoading = true;
      if (this.edit) {
        this.editSlide();
      } else {
        this.postSlide();
      }
    } else {
      this.messageService.add({
        key: 'toastMessage',
        severity: 'error',
        summary: 'Please complete all the fields',
      });
    }
  }

  editSlide() {
    const { name, order, description } = this.slideForm.value;
    let body;
    if (this.uploadedFile) {
      let image = this.base64Image;
      body = { name, order, description, image };
    } else {
      body = { name, order, description };
    }

    let url = `${this.url}/${this.slideId}`;
    this.httpService.patch<Slide>(url, body).subscribe((resp) => {
      if (resp.success) {
        this.messageService.add({
          key: 'toastMessage',
          severity: 'success',
          summary: 'Successfully updated',
        });
        this.loadSlide();
        this.fileInput.clear();
      } else {
        this.messageService.add({
          key: 'toastMessage',
          severity: 'error',
          summary: 'There was an error trying to update',
        });
      }
      this.isLoading = false;
    });
  }

  postSlide() {
    const { name, order, description } = this.slideForm.value;
    let image = this.base64Image;
    const body: any = { name, order, description, image };

    this.httpService.post<Slide>(this.url, body).subscribe((resp) => {
      if (resp.success) {
        this.messageService.add({
          key: 'toastMessage',
          severity: 'success',
          summary: 'Successfully posted',
        });
        this.fileInput.clear();
        this.slideForm.reset();
      } else {
        this.messageService.add({
          key: 'toastMessage',
          severity: 'error',
          summary: 'There was an error trying to post the slide',
        });
      }
      this.isLoading = false;
    });
  }
}
