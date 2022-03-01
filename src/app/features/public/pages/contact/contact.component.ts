import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  title: string = "Contacto";
  colorBackground: string = "#f3f3f3";
  constructor() {}

  ngOnInit(): void {}
}
