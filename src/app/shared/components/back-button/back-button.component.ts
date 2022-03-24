import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  @Input() label: string = 'Back';
  constructor() { }

  ngOnInit(): void {
  }

}
