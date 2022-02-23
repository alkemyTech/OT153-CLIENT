import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  private frmNews: FormGroup;
  private titleFormControl: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(4) ] );
  private contentFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private categoryInvalid: boolean;

  constructor(private formBuilder: FormBuilder) { 
    this.frmNews = this.newsForm();
  }

  ngOnInit(): void {
  }

  submit(): void{
  }

  newsForm(): FormGroup{
    return this.formBuilder.group(
      {
        title: this.titleFormControl,
        content: this.contentFormControl
      }
    );
  }

  selectedIdCategory(id: number) {
    console.log('idCategory: ', id);
  }

  dropdownCategoryEmpty(flag: boolean){
    this.categoryInvalid = flag;
  }

  get formNews():FormGroup{
    return this.frmNews;
  }

  get titleControl():FormControl{
    return this.formNews.controls['title'] as FormControl;
  }

  get categoryEmpty() :boolean{
    return this.categoryInvalid; 
  }

}
