import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Member } from '../../../../core/models/members.interfaces';
import { UsService } from '../../services/us.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  public members  : Member[] = [];
  faCoffee = faCoffee;
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
