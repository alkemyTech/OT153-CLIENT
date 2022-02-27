import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '@core/models/card.interfaces' 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard;
  @Input() fixedWidth?: boolean;
  @Input() class?: string;
  @Input() width?: number = 20;

  style = {}

  constructor() { }

  ngOnInit(): void {
    if (this.fixedWidth) {
      this.style = {
        'width': this.width+'rem', 
        'margin-bottom': '2em'
      }
    }
  }

}
