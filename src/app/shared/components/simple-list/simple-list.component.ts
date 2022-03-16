import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { New } from '@app/core/models/news.interfaces';
import { _RESOLVED_META_REDUCERS } from '@ngrx/store/src/tokens';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
  @Input() data: any[];
  @Input() createLink: string;
  @Input() editLink: string;
  @Output() emitCreate = new EventEmitter<number>();
  @Output() emitEdit = new EventEmitter<number>();
  @Output() emitDelete = new EventEmitter<number>();

  public rows: number = 10;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  create(){
    this.router.navigate([this.createLink], { })
    this.emitCreate.emit(-1);
  }

  edit(id:number){
    this.router.navigate([this.editLink, id], { })
    this.emitEdit.emit(id);
  }

  delete(id:number){
    this.emitDelete.emit(id);
  }


}
