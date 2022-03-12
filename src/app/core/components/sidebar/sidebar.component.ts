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
        label: "Inicio",
        icon: "pi pi-fw pi-plus",
        url: 'admin/'
      },
      {
        label: "Actividades",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-plus",
            url: "admin/actividades"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "admin/actividades/crear"
          }
        ]
      },
      {
        label: "Categorías",
        icon: "pi pi-fw pi-plus",
        url: 'admin/categorias'
      },
      {
        label: "Diapositivas",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-plus",
            url: "admin/diapositivas"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "admin/diapositivas/crear"
          }
        ]
      },
      {
        label: "Miembros",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-plus",
            url: "admin/miembros"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "admin/miembros/crear"
          }
        ]
      },
      {
        label: "Organización",
        icon: "pi pi-fw pi-plus",
        url: "admin/organizacion"
      },
      {
        label: "Usuarios",
        items: [
          {
            label: "Ver",
            icon: "pi pi-fw pi-plus",
            url: "admin/usuarios"
          },
          {
            label: "Añadir",
            icon: "pi pi-fw pi-plus",
            url: "admin/usuarios/crear"
          }
        ]
      },
    ]

  }
  

}
