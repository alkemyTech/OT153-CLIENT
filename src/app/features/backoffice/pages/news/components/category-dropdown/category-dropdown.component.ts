import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { HttpService } from "@app/core/services/http.service";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { respSimpleCategory, simpleCategory} from "@app/core/models/category.interface";
@Component({
  selector: "app-category-dropdown",
  templateUrl: "./category-dropdown.component.html",
  styleUrls: ["./category-dropdown.component.scss"],
})

export class CategoryDropdownComponent implements OnInit, OnChanges {
  url = "http://ongapi.alkemy.org/api/categories";
  categories: simpleCategory[];
  selectedCategory: simpleCategory = {name:"", id: -1};

  @Input() placeholder: string;
  @Input() required: boolean = false;
  @Input() setSelectedIdCategory: number;
  @Output() emitSelect = new EventEmitter<number>();
  @Output() emitTouchedDirty = new EventEmitter<boolean>();

  constructor(private HttpService: HttpService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void{
    this.getCategories();
    
  }

  ngOnChanges(){  
    if(this.setSelectedIdCategory < 0 || this.setSelectedIdCategory.toString() == "" ){
    } 
    else {
      const id = this.setSelectedIdCategory;
      this.selectedCategory.id = id as number;
      this.getCategory(id);
      this.idSelected();
    }
  }

  getCategory(id: number){
    if( id === undefined || id === null || id < 0){  
    } else{
      let _url = `${this.url}/${id}`;
      this.HttpService.get<respSimpleCategory>(_url)
        .subscribe((res) => {
          const { data } = res;
          this.selectedCategory = data;
        },
        (error) => {
           alert(error.error.message);
        }
      ); 
    }
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
    if (this.selectedCategory === null || this.selectedCategory === undefined) {
      this.emitTouchedDirty.emit(true);
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