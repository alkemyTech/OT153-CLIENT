import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthState } from '@app/core/redux/auth/auth.reducers';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'alk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  subscription: Subscription;
  isAuth: boolean = false;
  // isAuth$: Observable;

  constructor(private publicService: PublicapiService) {}

  ngOnInit(): void {
    this.subscription = this.publicService.getPublicOrganization().subscribe((organization) => {
      this.facebookLink = organization.data.facebook_url;
      this.instagramLink = organization.data.instagram_url;
      this.twitterLink = organization.data.twitter_url;
    });

    // this.isAuth$ = this.Store.select(Selection.getCurrentUser());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
