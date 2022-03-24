/**
 * @description 
 * Reusable card component, Receives an interface to display a title, 
 * a description and an image. If there is an error loading the image 
 * or it does not have it, it shows an empty placeholder. 
 * By default the width is set to 100% but you can set a fixed width.
 * @see ICard
 * @param data Receives type ICard. It is the information that will be show in the view. 
 * @param fixedWidth Receives type boolean. It isn't required attribute. In true it allows to define a fixed width to the card.
 * @param width Receives type number. It isn't required attribute. If 'fixedWidth' is true, this field will define the width.
 * @param heightDescription Receives type number. It isn't required attribute. Don't require 'fixedWidth'= true, this field will define the height of the panel.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Activities } from '@app/core/models/activities.interfaces';
import { ICard } from '@core/models/card.interfaces' 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard;
  @Input() fixedWidth?: boolean;
  @Input() width?: number = 20;
  @Input() heightDescription?: number = 5;

  style = {};
  styleDescription = {};

  constructor() {
  }

  ngOnInit(): void {  
    this.styleDescription = { 
      'width': '100%', 
      'height': this.heightDescription+'rem',
      'min-height': this.heightDescription+'rem',
      'max-height': this.heightDescription+'rem'
    }
    if (this.fixedWidth) {
      this.style = {
        'width': this.width+'rem', 
        'margin-bottom': '2em',
      }
    };

  }


  // 10011
}
