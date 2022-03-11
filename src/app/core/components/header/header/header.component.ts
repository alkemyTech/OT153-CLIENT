import { Component, OnInit } from '@angular/core';
import { link } from '@app/core/models/link.interface';

@Component({
  selector: 'alk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  links: link[];
  linksHome: link[] = [
    { link: '/home', text: 'Inicio' },
    { link: '/nosotros', text: 'Nosotros' },
    { link: '/contacto', text: 'Contacto' },
  ];
  linksBackoffice: link[] = [
    { link: '/backoffice/organization', text: 'Organizacion' },
    { link: '/backoffice/slides', text: 'Slides' },
    { link: '/backoffice/actividades', text: 'Actividades' },
    { link: '/backoffice/users', text: 'Usuarios' },
    { link: '/backoffice/members', text: 'Miembros' },
    { link: '/backoffice/categorias', text: 'Usuarios' },
    { link: '/backoffice/', text: 'Dashboard' },
  ];
  openNavbar: boolean = false;

  ngOnInit(): void {
    this.loadLinks();
  }

  loadLinks():void{
    let linksAux: link[] = this.linksHome
    let loged = this.checkIfLoged();
    if (loged){
      linksAux = [...this.linksHome, ...this.linksBackoffice];
    }
    this.links = linksAux
  }
  
  checkIfLoged(): boolean {
    let key: string | null = localStorage.getItem('test'); // localStorage item needs to be changed for the real key
    if (key) {
      return true;
    } else {
      return false;
    }
  }
}
