import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';

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
  @Input() formControlName: string;
  @Output() emitSelect = new EventEmitter<number>();
  @Output() emitClicked = new EventEmitter<boolean>();

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
    if (this.selectedCategory === null) {
      this.emitSelect.emit(undefined); //???
    }else{
      this.emitSelect.emit(this.selectedCategory.id);
    }
  }

  clickedEMPTY(){
    if (this.selectedCategory === null || this.selectedCategory === undefined) {
      this.emitClicked.emit(true);
    }else{
      this.emitClicked.emit(false);
    }
  }
}
