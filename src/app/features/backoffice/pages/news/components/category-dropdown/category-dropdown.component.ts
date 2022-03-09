import { respSimpleCategories } from '@core/models/category.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { respSimpleCategory, simpleCategoryData } from '@app/core/models/category.interface';
@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.scss'],
})
export class CategoryDropdownComponent implements OnInit {
  url = 'http://ongapi.alkemy.org/api/categories';
  categories: simpleCategoryData[];
  selectedCategory: simpleCategoryData;

  @Input() placeholder: string;
  @Input() required: boolean = false;
  @Input() setSelectedIdCategory: number;
  @Output() emitSelect = new EventEmitter<number>();
  @Output() emitTouchedDirty = new EventEmitter<boolean>();

  constructor(private HttpService: HttpService, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  setSelectedCategory() {
    if (this.setSelectedIdCategory < 0 || this.setSelectedIdCategory === null) {
    } else {
      const _id = this.setSelectedIdCategory;
      this.selectedCategory = { }
      this.getCategory(_id);
    }
  }

  getCategory(id: number) {
    if (id === undefined || id === null || id < 0) {
    } else {
      let _category: simpleCategoryData = {}
      let _url = `${this.url}/${id}`;
      this.HttpService.get<respSimpleCategory>(_url).subscribe({
        next: (resp) => { 
          const { data } = resp;
          _category = data;
        },
        error: (error:HttpErrorResponse) => { alert(error.status); },
        complete: () => { 
          this.selectedCategory = _category; 
          this.idSelected(); 
        } 
      });
    }
  }

  getCategories(): void {
    let _data: simpleCategoryData[];
    this.HttpService.get<respSimpleCategories>(`${this.url}`, true).subscribe({
      next: ( resp ) => { const { data } = resp; _data = data},
      error: ( error: HttpErrorResponse ) => { console.log( error.headers ); },
      complete: () => { 
        this.categories = _data;
        this.setSelectedCategory();
      }
    });
  }

  idSelected() {
    if (this.selectedCategory === null || this.selectedCategory === undefined) {
      this.emitTouchedDirty.emit(true);
    } else {
      this.emitSelect.emit(this.selectedCategory.id);
    }
  }

  clickedEMPTY() {
    if (this.required && (this.selectedCategory === null || this.selectedCategory === undefined)) {
      this.emitTouchedDirty.emit(true);
    } else {
      this.emitTouchedDirty.emit(false);
    }
  }
}