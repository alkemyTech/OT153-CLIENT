import { Component, OnInit } from '@angular/core';
import { SlideData, Slides } from '@app/core/models/slide.interfaces';
import { PrivateService } from '@app/features/services/private.service';
import { environment } from '@env/environment';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  load: boolean = true;
  public title:string = 'Somos Más ONG';
  public description:string = 'Somos Más es una organización que trabaja para dar respuesta a las problemáticas sociales que derivan de la pobreza.';
  public urlSlides = environment.apiUrlSlides;
  public slides: SlideData[];
  constructor(private privateService: PrivateService, private msjService:MessageService) { }

  ngOnInit(): void {
    this.getSlides();
}
  getSlides(){
    this.privateService.get<Slides>(this.urlSlides).subscribe((response) => {
      this.slides = response.data;
      this.slides = this.slides.slice(0, 5);
      this.load = false;
  },error=>{
    this.load = false;
    this.msjService.add({
      severity: 'error',
      summary: 'Ocurrio un Error',
      detail: 'Error al cargar Carousel',
    });
  });
  }


}
