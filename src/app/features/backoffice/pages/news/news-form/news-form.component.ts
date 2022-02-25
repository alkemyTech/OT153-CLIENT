/**
 * -- @param idNews: number. ------ If idNews >= 1 then EDIT else CREATE end.
 * -- @param routerLink: string.--- Back button path.
 *    
 */ 
import { HttpService } from '@app/core/services/http.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FileUpload } from 'primeng/fileupload';
import { New } from '@app/core/models/news.interfaces';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  @Input() routerLink: string;
  @Input() idNews: number; //idNews <= -1 --> create // idNews >= 0 --> edit
  public isEditFlag: boolean;
  private title: string = 'Crear';
  private url: string = 'http://ongapi.alkemy.org/api/news' ;
  public isLoading: boolean = false;

  private frmNews: FormGroup;
  private nameFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(4) ] );
  private contentFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private categoryFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private imageFormControl: FormControl = new FormControl('', [ Validators.required ] );
  public _categoryId: number;
  private categoryInvalid: boolean;
  private classicEditor = ClassicEditor;
  public config;
  public imageUrl: string;
  public base64Image: string | ArrayBuffer | null;
  public uploadedFile: File | null;

  constructor( private messageService: MessageService, private httpService: HttpService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.frmNews = this.newsForm();
    this.config = { placeholder:'Contenido' };
    this.isEditFlag = (this.idNews >= 0);
    this.title = this.isEdit? 'Editar' : 'Crear';  
    this.loadNews(); 
  }

  defineCreateOrEdit(){
    this.isEditFlag = this.idNews >= 0? true : false;
    this.title = this.isEdit? 'Editar' : 'Crear';    
  }

  submit(): void{
    this.frmNews.markAllAsTouched();
    if(this.frmNews.valid){
      this.isLoading = true;
      if(this.isEditFlag){
        this.patch();     
      }else{
        this.post();
      }
    }else{
      this.addToastMessage('error', 'Complete los campos del formulario')
    }    
    
  }

  patch(){
    const { name, content, category } = this.formNews.value;
    let body;
    if(this.uploadedFile){
      let image = this.base64Image;
      body = {name, content, category, image}  
    }else{
      body = {name, content, category }
    }

    let url = `${this.url}/${this.idNews}`;
    this.httpService.patch<New>(url, body).subscribe((resp) => {
      if(resp.success){
        this.addToastMessage('success', 'Edicion exitosa!');
        this.loadNews();
        this.fileInput.clear();
      }else{
        this.addToastMessage('error', 'Hubo un error al '+ this.title +' la Novedad!')
      }
      this.isLoading = false;
    })
  }

  post(){
    const { name, content, category } = this.formNews.value;
    let image = this.base64Image;
    const body: any = {name, content, category, image } ;

    this.httpService.post<New>(this.url, body).subscribe((resp)=>{
      if(resp.success){
        this.addToastMessage('success', 'Creacion exitosa!');
        this.addToastMessage('success', 'Usted creo la novedad: '+ name +'.');

        this.fileInput.clear();
        this.formNews.reset();
      }else{
        this.addToastMessage('error', 'Hubo un error al '+ this.title +' la Novedad!');
      }
      this.isLoading = false;
    })
  }

  newsForm(): FormGroup{
    return this.formBuilder.group( {
        name: this.nameFormControl,
        content: this.contentFormControl,
        category: this.categoryFormControl,
        image: this.imageFormControl
      }
    );
  }

  loadNews(){
    this.isEditFlag ? this.getNews(this.idNews) : null ;   
  }

  getNews(id: number){
    let url = `${this.url}/${id}`;
    this.httpService.get<New>(url)
      .subscribe((resp) => {
        const { success, data } = resp;
        this.frmNews.get('name')?.setValue(data.name);
        this.frmNews.get('content')?.setValue(data.content);
        this.frmNews.get('image')?.setValue(data.image);
        this.frmNews.get('category')?.setValue(data.category_id);
        this.imageUrl = resp.data.image;
        if(this.isEditFlag){
          this.frmNews.get('image')?.setErrors(null);
        }
    })
  }

  onSelect(event) {
    if(!event.currentFiles[0]) return
    let file = event.currentFiles[0];
    if(file.type === 'image/jpeg'){      
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result
      };
      this.uploadedFile = file;
      this.frmNews.controls['image'].setValue(file ? file.name : '');
    }
  }

  onRemove(){
    this.imageFormControl?.setValue('');
    this.base64Image = '';
    this.uploadedFile = null;
  }

  selectedIdCategory(newId: number) {
    this._categoryId = newId;
    this.categoryControl.setValue(newId);
  }

  dropdownCategoryTouchedDirty(flag: boolean) {
    this.categoryInvalid = flag;
  }

  addToastMessage(typeMsg: string, msg: string){
    this.messageService.add(
      { 
        key: 'toastMessage', 
        severity: typeMsg, 
        summary: msg, 
      }
    );
  }

  get formNews(): FormGroup {
    return this.frmNews;
  } 

  get nameControl(): FormControl {
    return this.formNews.get('name') as FormControl;
  }

  get contentControl(): FormControl {
    return this.formNews.get('content') as FormControl;
  }

  get categoryControl(): FormControl {
    return this.formNews.get('category') as FormControl;
  }

  get imageControl(): FormControl{
    return this.formNews.get('image') as FormControl;
  }

  get categoryTouchedDirty(): boolean {
    return this.categoryInvalid; 
  }

  get isEdit(): boolean{
    return this.isEditFlag;
  }

  get pageTitle(): string {
    return this.title;
  }

  get editor():any {
    return this.classicEditor;
  }

}
