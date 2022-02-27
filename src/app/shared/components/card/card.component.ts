import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '@core/models/card.interfaces' 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard;
  @Input() class?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
