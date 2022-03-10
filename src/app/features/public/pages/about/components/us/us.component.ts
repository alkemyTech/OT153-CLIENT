import { Component, OnChanges, OnInit } from '@angular/core';
import { Members, MembersResponse } from '@app/core/models/members.interfaces';
import { props, Store } from '@ngrx/store';
import { AboutMembersState } from '@app/core/models/about-state.interface';
import { Observable } from 'rxjs';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { AboutSelector as Selector, AboutActions as Actions } from '@app/core/redux/about/about.index';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss'],
})
export class UsComponent implements OnInit {
  members$: Observable<Members[]> = new Observable();
  members: Members[] = []
  constructor(private Store: Store<{ aboutMembersState: AboutMembersState }>, private publicService: PublicapiService) {
  }
  
  
  ngOnInit(): void {
    this.Store.dispatch(Actions.getMembers())
    this.Store.select(Selector.SelectStateAllMembers).subscribe((e) => {
      console.log('respuesta: ', e);
      // this.members = e;
     }
    )

    // this.publicService.getPublicMembers().subscribe((e)=> console.log(e))

  }
  clg(){
    console.log(this.members$);
    console.log(this.members);
  }
}
