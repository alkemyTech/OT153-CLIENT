import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() slides: Slide[];

	constructor() {
	}

	ngOnInit() {
  }

}
