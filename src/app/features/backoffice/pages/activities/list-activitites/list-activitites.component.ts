import { Component, OnInit } from '@angular/core';
import { Activities, ActivitiesResponse } from '@app/core/models/activities.interfaces';
import { PrivateService } from '@features/services/private.service';

@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss']
})
export class ListActivititesComponent implements OnInit {

  public url = 'http://ongapi.alkemy.org/api/activities';  
  public activities: Activities[];

  constructor(private privateService: PrivateService) { }

  ngOnInit(): void {
    this.privateService.get<ActivitiesResponse>(this.url).subscribe((resp)=>{
      this.activities = resp.data;
    })
  }

}
