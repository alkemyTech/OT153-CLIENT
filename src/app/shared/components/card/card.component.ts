import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '@core/models/card.interfaces' 

/**
 * @description 
 * Reusable card component, Receives an interface to display a title, 
 * a description and an image. If there is an error loading the image 
 * or it does not have it, it shows an empty placeholder. 
 * By default the width is set to 100% but you can set a fixed width.
 * 
 * @param data Receives type ICard. It is the information that will be show in the view @see ICard
 * @param fixedWidth Receives type boolean. It isn't required. In true it allows to define a fixed width to the card
 * @param width Receives type number. It isn't required. If 'fixedWidth' is true, this field will define the width.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard;
  @Input() fixedWidth?: boolean;
  @Input() width?: number = 20;

  style = {}

  constructor() { }

  ngOnInit(): void {
    if (this.fixedWidth) {
      this.style = {
        'width': this.width+'rem', 
        'margin-bottom': '2em',
      }
    };
  }

  

}
