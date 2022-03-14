import { async } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-news-form',
  templateUrl: './edit-news-form.component.html',
  styleUrls: ['./edit-news-form.component.scss']
})
export class EditNewsFormComponent implements OnInit {
  public id$ = new Observable<any>();

  constructor( public route: ActivatedRoute ) { }

  ngOnInit() {
    this.id$ = this.route.paramMap.pipe(
      switchMap(
        (params) => params.getAll('id')!        
      )
    );
  }

}
