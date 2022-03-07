import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}