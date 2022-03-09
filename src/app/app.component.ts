import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ProgressBarService } from './features/services/progressbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  displayProgressBar: boolean = false;
  subscription: Subscription;
  constructor(private primengConfig: PrimeNGConfig, private progressBarService: ProgressBarService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.subscription = this.progressBarService.renderProgressBar().subscribe((status) => {
        this.displayProgressBar = status;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
