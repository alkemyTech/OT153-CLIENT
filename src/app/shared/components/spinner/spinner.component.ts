import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() strokeWidth!: string; // Width of the circle stroke.
  @Input() fillColor!: string; // Color for the background of the circle.
  @Input() animationDuration!: string; // Duration of the rotate animation.
  @Input() class!: string;
  @Input() height!: number;
  @Input() width!: number;
  @Input() opacity!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
