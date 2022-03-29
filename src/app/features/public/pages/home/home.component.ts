import { Component, OnInit } from '@angular/core';
import { SlideData, Slides } from '@app/core/models/slide.interfaces';
import { PrivateService } from '@app/features/services/private.service';
import { environment } from '@env/environment';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';
import { ProgressBarService } from '@app/core/services/progressbar.service';
import { timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  load: boolean = true;
  public title: string = 'Somos Más ONG';
  public description: string =
    'Somos una ONG dedicada a combatir la pobreza.  Por eso nuestro trabajo está orientado a acabar con las desigualdades sociales y económicas, que son el origen del problema. Queremos un futuro sin pobreza y caminamos decididamente hacia él.';
  public urlSlides = environment.apiUrlSlides;
  public slides: SlideData[];
  constructor(
    private privateService: PrivateService,
    private dialogService: DialogService,
    private progressbarService: ProgressBarService
  ) {}

  ngOnInit(): void {
    this.progressbarService.setDisplay(true);
    this.getSlides();
  }
  getSlides() {
    this.privateService.get<Slides>(this.urlSlides).subscribe(
      (response) => {
        this.slides = response.data;
        this.slides = this.slides.slice(0, 5);
        this.load = false;
        this.progressbarService.setDisplay(false);
      },
      (error) => {
        this.load = false;
        let dialog: DialogData = {
          type: DialogType.ERROR,
          header: 'Error al procesar la operación',
          content: 'El Carousel de imagenes no pudo ser cargado.',
        };
        this.dialogService.show(dialog);
        this.progressbarService.setDisplay(false);
      }
    );
  }
}
