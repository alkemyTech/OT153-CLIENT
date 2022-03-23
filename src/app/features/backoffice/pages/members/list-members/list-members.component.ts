import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { memberState } from '@app/core/models/member-state.interface';
import { Member } from '@models/members.interfaces';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { MemberSelector as Selector, MemberActions as Action } from '@app/core/redux/members/member.index';
import { debounceTime, tap } from 'rxjs/operators';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss'],
})
export class ListMembersComponent implements OnInit {

  public members$: Observable<any> = new Observable();
  public members: Member[];
  public loading: boolean = false;

  private debouncer: Subject<string> = new Subject();

  constructor(private Store: Store<{ memberState: memberState }>) {}

  ngOnInit(): void {
    this.Store.dispatch(Action.getMembers());
    this.members$ = this.Store.select(Selector.SelectStateAllData).pipe(
      tap(
        () => this.loading = false
      )
    )
    this.getMembers();
    

    this.debouncer
      .pipe(
        debounceTime(600),
        tap( (name)=> {
          if(name.length > 0){
            this.loading = true;
          }
        }),
      )
        .subscribe((name) => {
          this.searchMember(name);
      });
    
  }

  getMembers() {
    this.members$.subscribe( (members) => {
      this.members = members.data;
    });
  }

  keyup(name: string){
    this.debouncer.next(name)
  }

  searchMember(name: string){
    if(name.length >= 2){
      this.Store.dispatch( Action.getMemberByName({name}));
    }else{
      this.Store.dispatch( Action.getMembers() );
    }
  }

}
