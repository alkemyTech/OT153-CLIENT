import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { Activities } from '@app/core/models/activities.interfaces'
 ++
@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss']
})
export class ActivitiesCardComponent implements OnInit {
  url = 'http://ongapi.alkemy.org/api/activities';
  activities: Activities[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<any>('http://ongapi.alkemy.org/api/activities').subscribe((resp)=>{
      const { data } = resp;
      this.activities = data;
    })    
  }


}
