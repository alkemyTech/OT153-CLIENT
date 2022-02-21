import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  categories: string[] = [
    "Novedades",
    "Actividades",
    "Categorias",
    "Testimonios",
    "Organizacion",
    "Slides",
    "Usuarios",
    "Miembros",
  ];

  constructor() {}

  ngOnInit(): void {}
}
