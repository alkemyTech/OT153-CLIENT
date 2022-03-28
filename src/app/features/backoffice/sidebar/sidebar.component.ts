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
        label: 'Dashboard',
        icon: "pi pi-fw pi-home",
        routerLink: 'dashboard',

      },
      {
        label: "Actividades",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "actividades",
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            routerLink: "actividades/crear"
          }
        ]
      },
      {
        label: "Novedades",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "novedades",
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            routerLink: "novedades/crear"
          }
        ]
      },
      {
        label: "Categorías",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "categorias"
          }
        ]
      },
      {
        label: "Organización",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "organizacion"
          },
          {
            label: "Editar",
            icon: "pi pi-fw pi-pencil",
            routerLink: "organizacion/editar"
          }
        ]
      },
      {
        label: "Diapositivas",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "diapositivas"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            routerLink: "diapositivas/crear"
          }
        ]
      },
      {
        label: "Miembros",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "miembros"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            routerLink: "miembros/crear"
          }
        ]
      },
      {
        label: "Usuarios",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-eye",
            routerLink: "usuarios"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            routerLink: "usuarios/crear"
          }
        ]
      },
    ]
  }
}
