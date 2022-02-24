import { HttpService } from '@app/core/services/http.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { New, NewData } from '@app/core/models/news.interfaces';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  @Input() idNews: number; //idNews <= -1 --> create // idNews >= 0 --> edit
  private isEditFlag: boolean = false;
  private title: string = 'Crear';
  private url: string = 'http://ongapi.alkemy.org/api/news' ;
  private frmNews: FormGroup;
  private titleFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(4) ] );
  private contentFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private categoryFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private categoryInvalid: boolean;

  private classicEditor = ClassicEditor;
  public config;


  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmNews = this.newsForm();
    this.defineCreateOrEdit();
    this.config = { placeholder:'Contenido' };
    this.loadNews();
  }

  defineCreateOrEdit():void{
    this.isEditFlag = this.idNews >= 0? true : false;
    this.title = this.isEdit? 'Editar' : 'Crear';
  }

  submit(): void{
  }

  getNews(id: number):void{
    let url = `${this.url}/${id}`;
    this.httpService.get<New>(url).subscribe((resp)=> {
      const {success, data} = resp;
      if(success && data.id){
        this.frmNews.get('title')?.setValue(data.name);
        this.frmNews.get('content')?.setValue(data.content);
        this.frmNews.get('category')?.setValue(data.category_id);
        console.log(data.name);
        
      }
    })
  }

  loadNews():void{
    const id = this.idNews;
    this.isEdit? this.getNews(id) : null ;
  }

  newsForm(): FormGroup{
    return this.formBuilder.group( {
        title: this.titleFormControl,
        content: this.contentFormControl,
        category: this.categoryFormControl
      }
    );
  }

  selectedIdCategory(id: number) {
    console.log('idCategory: ', id);
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

  get categoryControl(): FormControl{
    return this.formNews.get('category') as FormControl;
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
