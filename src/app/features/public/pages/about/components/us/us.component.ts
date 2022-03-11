import { Component, OnInit } from '@angular/core';
import { Member } from '@app/core/models/members.interfaces';
import { HttpService } from '@app/core/services/http.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { memberState } from '@app/core/models/member-state.interface';
import { MemberSelector as Selector, MemberActions as Action } from '@app/core/redux/members/member.index';


@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  public members$: Observable<any> = new Observable();
  public members: Member[];

  constructor(private Store: Store<{ memberState: memberState }>) {}

  ngOnInit(): void {
    this.Store.dispatch(Action.getMembers());
    this.members$ = this.Store.select(Selector.SelectStateAllData);
    this.getMembers();
  }

  getMembers() {
    this.members$.subscribe( (members) => {
      this.members = members.data;
    });
  }
}