import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public description:string = 'Somos Más es una organización que trabaja para dar respuesta a las problemáticas sociales que derivan de la pobreza.';
  constructor() { }

  ngOnInit(): void {
  }

}
