import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fullCategoryDate } from '@core/models/category.interface';
import { listCategories } from '@core/redux/categories/categories.actions';
import { SelectAllCategories } from '@core/redux/categories/categories.selector'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  categories: fullCategoryDate[];
  loading: boolean = false;
  loaded: boolean = false;
  error: any = null;
  newForm: boolean = true;
  private classicEditor = ClassicEditor;
  public form: FormGroup;
  public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public description: FormControl = new FormControl('', [Validators.required]);
  public image: FormControl = new FormControl('', [Validators.required]);
  public getControl = getControlFunction;

  constructor(private store: Store<any>, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.store.select(SelectAllCategories).subscribe(({ categories, error, loaded, loading }) => {
      this.categories = categories;
      this.loading = loading;
      this.loaded = loaded;
      this.error = error;
    });

    this.store.dispatch(listCategories());
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.name,
      description: this.description,
      image: this.image,
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
