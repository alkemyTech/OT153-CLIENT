import { HttpService } from '@app/core/services/http.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FileUpload } from 'primeng/fileupload';
import { New, NewData } from '@app/core/models/news.interfaces';
import { simpleCategory } from "@app/core/models/category.interface";

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;

  @Input() idNews: number; //idNews <= -1 --> create // idNews >= 0 --> edit
  private isEditFlag: boolean = false;
  private title: string = 'Crear';
  private url: string = 'http://ongapi.alkemy.org/api/news' ;
  public isLoading: boolean = false;

  private frmNews: FormGroup;
  private titleFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(4) ] );
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


  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.frmNews = this.newsForm();
    this.config = { placeholder:'Contenido' };
    this.defineCreateOrEdit();
    this.loadNews();    
  }

  defineCreateOrEdit(){
    this.isEditFlag = this.idNews >= 0? true : false;
    this.title = this.isEdit? 'Editar' : 'Crear';    
  }

  submit(): void{
    this.categoryControl.setValue(this._categoryId)
    this.frmNews.markAllAsTouched();
    if(this.frmNews.valid){
      this.isLoading = true;
      if(this.isEditFlag){
        this.edit();     
      }else{
        this.create();
      }
    }else{
      console.log("no valid");
      
    }

    console.log(this.frmNews.controls);
    
    
  }

  edit(){
    const { title, content } = this.formNews.value;
    let body;
    if(this.uploadedFile){
      let image = this.base64Image;
      body = {title, content, image}  
    }else{
      body = { title, content }
    }

    let url = `${this.url}/${this.idNews}`;
    this.httpService.patch<New>(url, body).subscribe((resp) => {
      if(resp.success){
        console.log("Good");
        
        this.loadNews();
        this.fileInput.clear();
      }else{
        console.log("Bad");
        
      }
      
      this.isLoading = false;
    })
  }

  create(){
    const {title, content} = this.formNews.value;
    let image = this.base64Image;
    const body: any = {title, content, image } ;

    this.httpService.post<New>(this.url, body).subscribe((resp)=>{
      if(resp.success){
        console.log("good");
        
        this.fileInput.clear();
        this.formNews.reset();
      }else{
        console.log("bad");
        
      }
      
      this.isLoading = false;
    })
  }

  newsForm(): FormGroup{
    return this.formBuilder.group( {
        title: this.titleFormControl,
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
        const category_id = data.category_id;
        console.log("one News", data);
        this.frmNews.get('title')?.setValue(data.name);
        this.frmNews.get('content')?.setValue(data.content);
        this.frmNews.get('image')?.setValue(resp.data.image);
        this.categoryControl.setValue(data.category_id)
        this.imageUrl = resp.data.image;
        
        console.log("values News",this.categoryControl.value);

    })

  }

  onSelect(event) {
    if(!event.currentFiles) return
    let file = event.currentFiles;
    if(file.type === 'image/jpeg'){      
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result
      };
      this.uploadedFile = file;
      this.formNews.controls['image'].setValue(file ? file.name : '');
    }
  }

  onRemove(){
    // this.imageFormControl?.setValue('');
    this.imageFormControl.setErrors( {required:true} )
    this.base64Image = '';
    this.uploadedFile = null;
  }

  selectedIdCategory(newId: number) {
    this._categoryId = newId;
  }

  dropdownCategoryTouchedDirty(flag: boolean) {
    this.categoryInvalid = flag;
  }

  get formNews(): FormGroup {
    return this.frmNews;
  } 

  get titleControl(): FormControl {
    return this.formNews.get('title') as FormControl;
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
