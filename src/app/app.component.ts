import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    console.table({...environment})
  }


}
