import { Component, OnInit } from '@angular/core';
import { SlideService } from './slide.service';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: Slide[];

	constructor(private slideService: SlideService) {
	}

	ngOnInit() {
		// this.slideService.getSlides().subscribe(slides => {
		// 	this.slides = slides;
    //   console.log(this.slides)
		// });

    this.slides = [
      {
        "id": 957,
        "name": "Día de juegos",
        "description": "<p>Niños jugando con platos y palos</p>",
        "image": "http://ongapi.alkemy.org/storage/1GWU2ds2OG.jpeg",
        "order": 1,
        "created_at": "2022-02-17T17:20:25.000000Z",
        "updated_at": "2022-02-17T17:20:25.000000Z",
        "deleted_at": "",
        "group_id": 36
      },
      {
        "id": 958,
        "name": "Clases de arte",
        "description": "<p>Se invito a los niños a jugar y expresarse a través de las pinturas</p>",
        "image": "http://ongapi.alkemy.org/storage/Pd1RBbBmjD.jpeg",
        "order": 2,
        "created_at": "2022-02-17T18:10:44.000000Z",
        "updated_at": "2022-02-17T18:13:51.000000Z",
        "deleted_at": ""
      },
      {
        "id": 960,
        "name": "Dia de campo",
        "description": "<p>Fuimos a recorrer los campos de girasol y aprender sobre su cultivo</p>",
        "image": "http://ongapi.alkemy.org/storage/Py5OsKiahh.jpeg",
        "order": 3,
        "created_at": "2022-02-17T18:46:12.000000Z",
        "updated_at": "2022-02-17T18:46:12.000000Z",
      }
    ]
  }

}
