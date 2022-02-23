import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@app/core/services/http.service';
import { Subscription } from 'rxjs';

//!
interface simpleCategory {
  id:number;
  name:string;
}

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.scss']
})
export class CategoryDropdownComponent implements OnInit {
  url= "http://ongapi.alkemy.org/api/categories?limit=5";
  categories: simpleCategory[];
  selectedCategory: simpleCategory;

  @Input() placeholder: string;
  @Output() propagar = new EventEmitter<number>();

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

  idSelected() {
    this.propagar.emit(this.selectedCategory.id);
  }
}
