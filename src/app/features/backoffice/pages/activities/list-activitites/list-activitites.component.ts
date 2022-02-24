import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-activitites',
  templateUrl: './list-activitites.component.html',
  styleUrls: ['./list-activitites.component.scss']
})
export class ListActivititesComponent implements OnInit {

  public url = 'http://ongapi.alkemy.org/api/activities';

  constructor() { }

  ngOnInit(): void { }

}
