import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.scss'],
})
export class AboutTextComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
