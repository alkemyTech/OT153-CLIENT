import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'alk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
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
