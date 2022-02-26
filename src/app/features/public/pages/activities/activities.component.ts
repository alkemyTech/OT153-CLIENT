import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  public title = 'Actividades';
  public backgroundColor = '#42526e';
  public textColor = '#fff';
  public text: string = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
