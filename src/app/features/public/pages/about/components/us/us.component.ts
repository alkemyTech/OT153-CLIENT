import { Component, OnInit } from '@angular/core';
import { Member } from '@app/core/models/members.interfaces';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  members  : Member[];
  url = 'http://ongapi.alkemy.org/api/members';
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
    this.httpService.get<any>(this.url).subscribe((response)=>{
      const { data } = response
      this.members = data;
    });
  }

}