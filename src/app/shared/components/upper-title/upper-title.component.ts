import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-title',
  templateUrl: './upper-title.component.html',
  styleUrls: ['./upper-title.component.scss']
})
export class UpperTitleComponent implements OnInit {
  @Input()title!: string;
  @Input()pathBackground!: string;

  constructor() {
   
  }

  ngOnInit(): void {
    
  }

}
