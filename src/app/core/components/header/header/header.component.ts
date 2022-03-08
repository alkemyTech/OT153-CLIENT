import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public nav = [
    'inicio',
    'donar',
    'contacto'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
