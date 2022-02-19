import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: Slide[];

	responsiveOptions;

	constructor(private carouselService: CarouselService) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		// this.productService.getProductsSmall().then(products => {
		// 	this.products = products;
		// });
  }

}
