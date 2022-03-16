import { Component, OnDestroy, OnInit } from '@angular/core';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alk-footer-school',
  templateUrl: './footer-school.component.html',
  styleUrls: ['./footer-school.component.scss'],
})
export class FooterSchoolComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  subscription: Subscription;

  constructor(private publicService: PublicapiService) {}

  ngOnInit(): void {
    this.subscription = this.publicService.getPublicOrganization().subscribe((organization) => {
      this.facebookLink = organization.data.facebook_url;
      this.instagramLink = organization.data.instagram_url;
      this.twitterLink = organization.data.twitter_url;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
