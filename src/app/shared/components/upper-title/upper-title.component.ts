import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-title',
  templateUrl: './upper-title.component.html',
  styleUrls: ['./upper-title.component.scss']
})
export class UpperTitleComponent implements OnInit {
  @Input()title!: string;
  @Input()pathBackground!: string;
  @Input()colorBackground!: string;
  @Input()colorText!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  backgroundSelect(): boolean{
    return !(this.pathBackground===undefined)
  }

  background():string{
    if (this.backgroundSelect()){
      return "url("+this.pathBackground+")";
    }else{
      return "url('http://placekitten.com/400/400')";
    }
  }

}
