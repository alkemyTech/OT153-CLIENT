import { Component, OnInit } from '@angular/core';

interface simpleCategory {
  id:string;
  name:string;
}

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{

  }

  selectedIdCategory(mensaje) {
    console.log('idCategory: ', mensaje);
  }

}
