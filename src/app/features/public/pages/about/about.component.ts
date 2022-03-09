import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Organization } from '@core/models/organization.interfaces';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Members } from '@app/core/models/members.interfaces';
import { AboutSelector as Selector, AboutActions as Actions } from '@app/core/redux/about/about.index';
import { AboutOrganizationState } from '@app/core/models/about-state.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public title = 'Sobre Nosotros';
  public backgroundColor = '#DB5752';
  public textColor = '#fff';

  public text: string = '';
  organization$: Observable<Organization> = this.store.select((state) => state.organization);

  constructor(private httpService: HttpService, private store: Store<{ organization: Organization }>) {}

  ngOnInit(): void {
    this.httpService.get<Organization>(environment.apiUrlOrganization).subscribe((resp) => {
      this.text = resp.data.long_description;
    });

    this.store.dispatch({ type: '[About Page] Load Organization' });
  }
}
