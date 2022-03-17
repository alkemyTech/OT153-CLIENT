import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BackofficeLayoutService } from '@app/core/services/backoffice-layout.service';


@Component({
  selector: 'alk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public items: MenuItem[];
  public visible: boolean = false;
  private show: Observable<boolean>;

  constructor(public layoutService: BackofficeLayoutService) { 
    this.show = this.layoutService.ShowSlideObservable;
  }

  ngOnInit(): void {
    this.defineItems();
    this.showSubscribe();
  }

  showSubscribe(){
    this.show.subscribe({
      next: (resp) => { this.visible = resp }      
    })
  }

  onHide(e):void{
    this.layoutService.hideSlide();
  }

  defineItems(){
    this.items = [
      {
        label: "Actividades",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            url: "backoffice/actividades"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "backoffice/actividades/crear"
          }
        ]
      },
      {
        label: "Categorías",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            url: "backoffice/categorias"
          }
        ]
      },
      {
        label: "Diapositivas",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            url: "backoffice/diapositivas"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "backoffice/diapositivas/crear"
          }
        ]
      },
      {
        label: "Miembros",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            url: "backoffice/miembros"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "backoffice/miembros/crear"
          }
        ]
      },
      {
        label: "Usuarios",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            url: "backoffice/usuarios"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "backoffice/usuarios/crear"
          }
        ]
      },
    ]
  }
}
