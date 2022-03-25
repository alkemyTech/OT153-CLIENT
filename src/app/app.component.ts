import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { timer } from 'rxjs';
import { ProgressBarService } from './core/services/progressbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayProgress: boolean;
  constructor(private primengConfig: PrimeNGConfig, private progressbarService: ProgressBarService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.progressbarService.display.subscribe(state => {
      this.displayProgress = state;
    })
    timer(1400).subscribe(() => { 
      this.progressbarService.setDisplay(false)
    })  
  }  
}
