import { Component, OnInit } from '@angular/core';
import { BackofficeLayoutService } from '@app/core/services/backoffice-layout.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'alk-header-backoffice',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderBackofficeComponent implements OnInit {
  
  constructor(public layoutService: BackofficeLayoutService) { 
  }

  ngOnInit(): void {
  }

  openNavbar() : void {
    this.show();
  }

  show(){
    this.layoutService.showSlide();
  }

}
