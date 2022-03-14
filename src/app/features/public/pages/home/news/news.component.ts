import { Component, OnInit } from '@angular/core';
import { NewData } from '@app/core/models/news.interfaces';
import { PrivateService } from '@app/features/services/private.service';
import { environment } from '@env/environment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'alk-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  load: boolean = true;
  public urlNews = environment.apiUrlNews;
  public news:NewData [];
  constructor(private privateService: PrivateService, private msjService:MessageService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.privateService.get<NewData>(this.urlNews).subscribe((response:any) => {
      this.news = response.data;
      this.news = this.news.slice(0, 3);
      this.load = false;
      console.log(this.news)
  },(error:any)=>{
    this.load = false;
    this.msjService.add({
      severity: 'error',
      summary: 'Ocurrio un Error',
      detail: 'Error al cargar Noticias',
    });
  });
  }
}
