import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alk-donations-header',
  templateUrl: './donations-header.component.html',
  styleUrls: ['./donations-header.component.scss']
})
export class DonationsHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
