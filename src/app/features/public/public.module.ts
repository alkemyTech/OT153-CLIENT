import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '@app/core/components/header/header/header.component';
import { FooterComponent } from '@app/core/components/footer/footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';
import { AboutComponent } from './pages/about/about.component';
import { AboutTextComponent } from './pages/about/components/about-text/about-text.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';
import { ErrorComponent } from './pages/donations/error/error.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivitiesCardComponent } from './pages/activities/components/activities-card/activities-card.component';
import { ActivitySelectedComponent } from './pages/activities/components/activity-selected/activity-selected.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactInfoComponent } from './pages/contact/components/contact-info/contact-info.component';
import { UsComponent } from './pages/about/components/us/us.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/home/news/news.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { DonationsHeaderComponent } from './pages/donations/donations-header/donations-header.component';
import { LeafletMapComponent } from './pages/contact/components/leaflet-map/leaflet-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';

@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AboutTextComponent,
    CampaignsComponent,
    DonationsComponent,
    ThanksComponent,
    ErrorComponent,
    ActivitiesCardComponent,
    ActivitiesComponent,
    ActivitySelectedComponent,
    ContactComponent,
    ContactInfoComponent,
    UsComponent,
    HomeComponent,
    NewsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DonationsHeaderComponent,
    LeafletMapComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SharedModule, LeafletModule],
  exports: [SharedModule],
})
export class PublicModule {}
