import { Component, Input, OnInit } from '@angular/core';
import { Skeletons } from '@app/core/models/skeleton.interface';

@Component({
  selector: 'alk-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  
  @Input() skeletonType: string = '';  
  @Input() headers: string[] = [];
  @Input() rows: number;
  @Input() skeletons: Skeletons[] = [];

  rowsData: string[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.generateRows(this.rows);
  }

  generateRows(rows: number){
    let i = 0;
    while (i < rows) {
      this.rowsData.push('');
      i++;
    }
  }

}
