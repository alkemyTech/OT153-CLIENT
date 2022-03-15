import { Component, OnInit } from '@angular/core';
import { New } from '@app/core/models/news.interfaces';
import { PrivateService } from '@app/features/services/private.service';
import { environment } from '@env/environment';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'alk-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  load: boolean = true;
  public urlNews = environment.apiUrlNews;
  public news:New [];
  constructor(private privateService: PrivateService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.privateService.get<New>(this.urlNews).subscribe((response:any) => {
      this.news = response.data;
      this.news = this.news.slice(0, 3);
      this.load = false;
  },(error:any)=>{
    this.load = false;
    let dialog: DialogData = { type: DialogType.ERROR, header:  'Error al procesar la operación', content: 'Error al cargar las noticias.'};
    this.dialogService.show(dialog);
  });
  }
}
