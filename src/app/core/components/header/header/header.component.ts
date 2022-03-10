import { Component, OnInit } from '@angular/core';
import { link } from '@app/core/models/link.interface';

@Component({
  selector: 'alk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links:link[]
  openNavbar:boolean = false
  ngOnInit(): void {
    this.links = [
      { link: '/home', text: 'Inicio', render: true, backoffice: false },
      { link: '/nosotros', text: 'Nosotros', render: true, backoffice: false },
      { link: '/contacto', text: 'Contacto', render: true, backoffice: false },

      { link: '/backoffice/organization', text: 'Organizacion', render: false, backoffice: true },
      { link: '/backoffice/slides', text: 'Slides', render: false, backoffice: true },
      { link: '/backoffice/actividades', text: 'Actividades', render: false, backoffice: true },
      { link: '/backoffice/users', text: 'Usuarios', render: false, backoffice: true },
      { link: '/backoffice/members', text: 'Miembros', render: false, backoffice: true },
      { link: '/backoffice/categorias', text: 'Usuarios', render: false, backoffice: true },
      { link: '/backoffice/', text: 'Dashboard', render: false, backoffice: true },
    ];
    
  }


  render(links:link[]):void{
    let loged:boolean = this.checkIfLoged()
    loged = true
    if (loged){
      links.forEach((link)=>{this.renderBackoffice(link)})
    }
  }
  
  renderBackoffice(link:link):void{
    if (link.backoffice){
      link.render = true;
    }
  }
  checkIfLoged():boolean {
    let key:string | null = localStorage.getItem('???')
    if (key) {
      return true
    } else {
      return false
    }
  }

}
