import { Component, OnInit } from '@angular/core';
import { Slide, SlideData, Slides } from '@app/core/models/slide.interfaces';
import { PrivateService } from '@app/features/services/private.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html',
  styleUrls: ['./slides-list.component.scss']
})
export class SlidesListComponent implements OnInit {

  public url = 'http://ongapi.alkemy.org/api/slides';
  public slides: SlideData[];

  constructor(private privateService: PrivateService) {}

  ngOnInit(): void {
    this.privateService.get<Slides>(this.url).subscribe((resp) => {
      this.slides = resp.data;
    });
  }

}
