import { Component, OnInit } from '@angular/core';
import { Member } from '../../../../../../core/models/members.interfaces';
import { UsService } from '../../../../services/us.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  public members  : Member[] = [];
  constructor(
    private _us : UsService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
    this._us.getMember().subscribe(response => {
      this.members = response.data;
    });
  }

}
