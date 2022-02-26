import { Component, OnInit } from '@angular/core';
import { SlideData } from '@app/core/models/slide.interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slides: SlideData[];

  constructor() {}

  ngOnInit() {}
}
