import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrganizationState } from '@app/core/models/organization-state.interface';
import { Organization, OrganizationData } from '@app/core/models/organization.interfaces';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  OrganizationSelector as Selector,
  OrganizationActions as Action,
} from '@app/core/redux/organization/organization.index';
@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss'],
})
export class OrganizationDetailsComponent implements OnInit {
  public organization$: Observable<Organization> = new Observable();
  public error$: Observable<HttpErrorResponse> = new Observable();
  public subscriptions: Subscription[] = [];
  public organization: OrganizationData;

  constructor(private Store: Store<{ organizationState: OrganizationState }>) {}

  ngOnInit(): void {
    this.organization$ = this.Store.select(Selector.SelectStateOrganization);
    this.error$ = this.Store.select(Selector.SelectStateOrganizationError);
    this.getOrganization();
    this.Store.dispatch(Action.getOrganization());
  }

  getOrganization() {
    this.subscriptions.push(
      this.organization$.subscribe((organization) => {
        this.organization = organization.data;
      })
    );

    this.subscriptions.push(
      this.error$.subscribe((error) => {
        // error...
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
}
