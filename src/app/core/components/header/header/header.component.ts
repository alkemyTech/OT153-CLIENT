import { Component, OnInit } from '@angular/core';
import { link } from '@app/core/models/link.interface';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { getAuth } from '@app/core/redux/auth/auth.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'alk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private Store: Store<AuthState>) {
     this.authentication$ = this.Store.pipe(select(getAuth));
  }
  authentication$: Observable<boolean>;
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

  loadLinks(): void {
    this.authentication$.subscribe(auth =>{
      if (auth) {
        this.links = [...this.linksHome, ...this.linksBackoffice];
      } else {
        this.links = this.linksHome;
      }
    })
 
  }
}
