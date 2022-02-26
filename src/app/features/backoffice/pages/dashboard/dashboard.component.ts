import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  categories: category[] = [
    { title: 'Novedades', link: 'novedades' },
    { title: 'Actividades', link: 'actividades' },
    { title: 'Categorias', link: 'categorias' },
    { title: 'Testimonios', link: 'testimonios' },
    { title: 'Organizacion', link: 'organizacion' },
    { title: 'Slides', link: 'slides' },
    { title: 'Usuarios', link: 'usuarios' },
    { title: 'Miembros', link: 'miembros' },
  ];

  redirect(link: string): void {
    this.router.navigate([`/backoffice/${link}`]);
  }

  ngOnInit(): void {}
}

interface category {
  title: string;
  link: string;
}
