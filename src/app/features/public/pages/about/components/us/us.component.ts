import { Component, OnInit } from '@angular/core';
import { Members, MembersResponse } from '@app/core/models/members.interfaces';
import { AboutSelector as Selector, AboutActions as Actions } from '@app/core/redux/about/about.index';
import { Store } from '@ngrx/store';
import { AboutMembersState } from '@app/core/models/about-state.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss'],
})
export class UsComponent implements OnInit {
  members$: Observable<Members[]> = new Observable();

  constructor(private Store: Store<{ aboutMembersState: AboutMembersState }>) {}

  ngOnInit(): void {
    this.members$ = this.Store.select(Selector.SelectStateAllMembers);
    this.Store.dispatch(Actions.getMembers());
  }
}
