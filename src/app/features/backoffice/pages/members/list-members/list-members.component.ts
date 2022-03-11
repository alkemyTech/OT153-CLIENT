import { Component, OnInit } from '@angular/core';
import { memberState } from '@app/core/models/member-state.interface';
import { Member, MembersResponse } from '@models/members.interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MemberSelector as Selector, MemberActions as Action } from '@app/core/redux/members/member.index';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss'],
})
export class ListMembersComponent implements OnInit {
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
      console.log(members)

      this.members = members.data;
      console.log(members)
    });
  }
}
