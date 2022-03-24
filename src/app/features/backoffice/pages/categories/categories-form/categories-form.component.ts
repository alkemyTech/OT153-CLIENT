import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fullCategoryDate, respSimpleCategory } from '@core/models/category.interface';
import { listCategories } from '@core/redux/categories/categories.actions';
import { SelectAllCategories } from '@core/redux/categories/categories.selector'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FileUpload } from 'primeng/fileupload';
import { PrivateService } from '@app/core/services/private.service';
import { environment } from '@env/environment';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  @Input() routerLink: string;
  @Input() id: number | null;
  categories: fullCategoryDate[];
  loading: boolean = false;
  loaded: boolean = false;
  error: any = null;
  newForm: boolean = true;
  public isLoading: boolean = false;
  private classicEditor = ClassicEditor;
  public form: FormGroup;
  public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public description: FormControl = new FormControl('', [Validators.required]);
  public image: FormControl = new FormControl('', [Validators.required]);
  public getControl = getControlFunction;
  public config;
  public uploadedFile: File | null;
  public base64Image: string | ArrayBuffer | null;
  public imageUrl: string | ArrayBuffer;
  categoryURL: string = environment.apiUrlCategories;

  constructor(private store: Store<any>, private formBuilder: FormBuilder, private privateService: HttpService) {}

  ngOnInit(): void {
    this.form = this.createForm();
    this.defineCreateOrEdit();
    this.config = { placeholder: 'Contenido' };
    this.store.dispatch(listCategories());
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.name,
      description: this.description,
      image: this.image,
    });
  }

  submit(): void {
    if (this.newForm) {
      this.postCategory();
    } else {
      this.patchCategory();
    }
  }
  get editor(): any {
    return this.classicEditor;
  }
  onRemove() {
    this.image?.setValue('');
    this.base64Image = '';
    this.uploadedFile = null;
  }
  onSelect(event) {
    if (!event.currentFiles[0]) return;
    let file = event.currentFiles[0];
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result;
      };
      this.uploadedFile = file;
      this.form.controls['image'].setValue(file ? file.name : '');
    }
  }

  defineCreateOrEdit(): void {
    if (this.id == null) {
      this.newForm = true;
    } else {
      this.newForm = false;
      this.getCategory(this.id);
    }
  }
  postCategory(): void {
    const { name, description } = this.form.value;
    let image = this.base64Image;
    const body: fullCategoryDate = {
      name: name,
      description: description,
      image: image,
    };
    this.privateService.post(this.categoryURL, body).subscribe(
      (res) => {
        console.log(res);
        //Mensaje de success
      },
      (error) => {
        //Alerta de error
      }
    );
  }

  patchCategory(): void {
    let url = `${this.categoryURL}/${this.id}`;
    const { name, description, fbLink, liLink } = this.form.value;
    let body: fullCategoryDate;
    if (this.uploadedFile) {
      let image = this.base64Image;
      body = {
        name: name,
        description: description,
        image: image,
      };
    } else {
      body = {
        name: name,
        description: description,
      };
    }
    this.privateService.patch<fullCategoryDate>(url, body).subscribe(
      (res) => {
        console.log(res)
        //Mensaje de success
      },
      (error) => {
        //Alerta de error
      }
    );
  }

  getCategory(id: number | null): void {
    let url = `${this.categoryURL}/${id}`;
    this.privateService.get<any>(url).subscribe((res) => {
      const data: fullCategoryDate = res.data;
      this.form.get('name')?.setValue(data.name);
      this.form.get('description')?.setValue(data.description);
      this.form.get('image')?.setValue(data.image);
      this.imageUrl = data.image ? data.image : '';
    });
  }
}
