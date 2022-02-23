import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@app/core/services/http.service';
import { Subscription } from 'rxjs';

//!
interface simpleCategory {
  id:string;
  name:string;
}

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.scss']
})
export class CategoryDropdownComponent implements OnInit {
  url= "http://ongapi.alkemy.org/api/categories?limit=2";

  categories: simpleCategory[];
  selectedCategory: simpleCategory;

  constructor(private HttpService :HttpService) {

  }

  ngOnInit() {
    this.HttpService.get<simpleCategory[]>(`${this.url}`, true).subscribe(
      (res : any) => {
        const { data } = res;
        const _categories = data;
        this.categories = [..._categories];
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
