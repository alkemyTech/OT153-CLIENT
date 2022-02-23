import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public description:string = 'Somos Más es una organización que trabaja para dar respuesta a las problemáticas sociales que derivan de la pobreza.';
  constructor() { }

  ngOnInit(): void {
  }

}
