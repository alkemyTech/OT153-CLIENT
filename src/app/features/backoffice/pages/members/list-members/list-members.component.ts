import { Component, OnInit } from '@angular/core';
import { Members, MembersResponse } from '@models/members.interfaces';
import { PrivateService } from '@features/services/private.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {
  public url = 'http://ongapi.alkemy.org/api/members';  
  public members: Members[];

  constructor(private privateService: PrivateService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
      this.privateService.get<MembersResponse>(this.url).subscribe((response)=>{
      this.members = response.data;
    })
  }
}
