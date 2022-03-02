/**
 * -- @param idNews: number. ------ If idNews >= 1 then EDIT else CREATE end.
 * -- @param routerLink: string.--- Back button path.
 *
 */
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { getControl } from '@app/core/util/getControlForm';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { HttpService } from '@app/core/services/http.service';
import { New, NewData, News } from '@app/core/models/news.interfaces';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PrivateApiService } from '@app/core/services/privateApi.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  @Input() routerLink: string;
  @Input() idNews: number; //idNews <= -1 --> create // idNews >= 0 --> edit
  public isEditFlag: boolean;
  private title: string = 'Crear';
  private url: string = 'http://ongapi.alkemy.org/api/news';
  public isLoading: boolean = false;
  private frmNews: FormGroup;
  private nameFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  private contentFormControl: FormControl = new FormControl('', [Validators.required]);
  private categoryFormControl: FormControl = new FormControl('', [Validators.required]);
  private imageFormControl: FormControl = new FormControl('', [Validators.required]);
  public getControl = getControlFunction;
  public _categoryId: number;
  private categoryInvalid: boolean;
  private classicEditor = ClassicEditor;
  public config;
  public imageUrl: string;
  public base64Image: string | ArrayBuffer | null;
  public uploadedFile: File | null;

  constructor( private messageService: MessageService, private httpService: HttpService, private httpPrivateService: PrivateApiService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.frmNews = this.newsForm();
    this.config = { placeholder: 'Contenido' };
    this.defineCreateOrEdit();
    this.loadNews();
  }

  newsForm(): FormGroup {
    return this.formBuilder.group({
      name: this.nameFormControl,
      content: this.contentFormControl,
      category: this.categoryFormControl,
      image: this.imageFormControl,
    });
  }

  defineCreateOrEdit() {
    this.isEditFlag = this.idNews >= 0 ? true : false;
    this.title = this.isEdit ? 'Editar' : 'Crear';
  }

  loadNews() {
    this.isEditFlag ? this.getNews(this.idNews) : null;
  }

  submit(): void {
    this.frmNews.markAllAsTouched();
    if (this.frmNews.valid) {
      this.isLoading = true;
      if (this.isEditFlag) {
        this.patch();
      } else {
        this.post();
      }
    } else {
      this.addToastMessage('error', 'Complete los campos del formulario');
    }
  }

  patch() {
    const { name, content } = this.formNews.value;
    let body;
    const category_id = this._categoryId;
    if (this.uploadedFile) {
      let image = this.base64Image;
      body = { name, content, category_id, image };
    } else {
      body = { name, content, category_id };
    }

    let url = `${this.url}/${this.idNews}`;
    this.httpPrivateService.patchNews<New>(url, body).subscribe((resp) => {
      if(resp.success){
        this.addToastMessage('success', 'Edicion exitosa!');
        this.loadNews();
        this.fileInput.clear();
      } else {
        this.addToastMessage('error', 'Hubo un error al ' + this.title + ' la Novedad!');
      }
      this.isLoading = false;
    });
  }

  post() {
    const { name, content} = this.formNews.value;
    let image = this.base64Image;
    const category_id = this._categoryId;
    const body: any = { name, content, category_id, image };
    let _resp: New;
    this.httpPrivateService.post<New>(this.url, body).subscribe({
      next: (resp) => { _resp = resp },
      error: (error:HttpErrorResponse) => { 
        this.addToastMessage('error', "Error: "+ error.status +'. Hubo un error al' + this.title + 'la Novedad!');
      },
      complete: () => { 
        if (_resp.success) {
          this.addToastMessage('success', 'Creacion exitosa!');
          this.addToastMessage('success', 'Usted creo la novedad: ' + name + '.');

          this.fileInput.clear();
          this.formNews.reset();
        } else {
          this.addToastMessage('error', 'Hubo un error al ' + this.title + ' la Novedad!');
        }
        this.isLoading = false;
      },
    });
  }

  getNews(id: number) {
    let url = `${this.url}/${id}`;
    this.httpService.get<New>(url).subscribe((resp) => {
      const { success, data } = resp;
      this.frmNews.get('name')?.setValue(data.name);
      this.frmNews.get('content')?.setValue(data.content);
      this.frmNews.get('image')?.setValue(data.image);
      this.frmNews.get('category')?.setValue(data.category_id);
      this.imageUrl = resp.data.image;
      if (this.isEditFlag) {
        this.frmNews.get('image')?.setErrors(null);
      }
    });
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
      this.frmNews.controls['image'].setValue(file ? file.name : '');
    }
  }

  onRemove() {
    this.imageFormControl?.setValue('');
    this.base64Image = '';
    this.uploadedFile = null;
  }

  selectedIdCategory(newId: number) {
    this._categoryId = newId;    
    this.categoryFormControl.setValue(newId);
  }

  dropdownCategoryTouchedDirty(flag: boolean) {
    this.categoryInvalid = flag;
  }

  addToastMessage(typeMsg: string, msg: string) {
    this.messageService.add({
      key: 'toastMessage',
      severity: typeMsg,
      summary: msg,
    });
  }

  get formNews(): FormGroup {
    return this.frmNews;
  }

  formControl(name: string): FormControl {
    return getControl(this.formNews, name) as FormControl;
  }

  get categoryTouchedDirty(): boolean {
    return this.categoryInvalid;
  }

  get isEdit(): boolean {
    return this.isEditFlag;
  }

  get pageTitle(): string {
    return this.title;
  }

  get editor(): any {
    return this.classicEditor;
  }
}
