import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "@app/core/services/http.service";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { simpleCategory} from "@app/core/models/category.interface";
@Component({
  selector: "app-category-dropdown",
  templateUrl: "./category-dropdown.component.html",
  styleUrls: ["./category-dropdown.component.scss"],
})
export class CategoryDropdownComponent implements OnInit {
  url = "http://ongapi.alkemy.org/api/categories";
  categories: simpleCategory[];
  selectedCategory: simpleCategory;

  @Input() placeholder: string;
  @Input() required: boolean = false;
  @Input() setSelectedIdCategory: number;
  @Output() emitSelect = new EventEmitter<number>();
  @Output() emitTouchedDirty = new EventEmitter<boolean>();

  constructor(private HttpService: HttpService, private route: ActivatedRoute, private http: HttpClient) {
    
  }

  ngOnInit() {
    this.getCategory()
  }

  getCategory():void{
    if( this.setSelectedIdCategory !== undefined 
      || this.setSelectedIdCategory !== null){
      let id = this.setSelectedIdCategory;      
      this.HttpService.get<simpleCategory>(`${this.url}/${id}`).subscribe(
        (res: any) => {
          const { data } = res;
          this.selectedCategory = data;
          
        },
        (error) => {
          alert(error.error.message);
        }
      ); 
    } 
    this.getCategories();  
  }

  getCategories(): void{
    this.HttpService.get<simpleCategory[]>(`${this.url}`, true).subscribe(
      (res: any) => {
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
    console.log(this.selectedCategory);
    
    if (this.selectedCategory === null|| this.selectedCategory === undefined) {
      this.emitTouchedDirty.emit(true);
      this.emitSelect.emit(undefined); //???
    } else {
      this.emitSelect.emit(this.selectedCategory.id);
    }
  }

  clickedEMPTY() {
    if (this.required && (this.selectedCategory === null || this.selectedCategory === undefined)) 
    {
      this.emitTouchedDirty.emit(true);
    } else {
      this.emitTouchedDirty.emit(false);
    }
  }


}
