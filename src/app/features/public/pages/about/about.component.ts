import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Organization, OrganizationData } from '@core/models/organization.interfaces';
import { environment } from '@env/environment';
import { DialogService } from '@app/core/services/dialog.service';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';
import { Store } from '@ngrx/store';
import { OrganizationState } from '@app/core/models/organization-state.interface';
import {
  OrganizationSelector as Selector,
  OrganizationActions as Action,
} from '@app/core/redux/organization/organization.index';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  load: boolean = true;
  public title = 'Sobre Nosotros';
  public backgroundColor = '#DB5752';
  public textColor = '#fff';
  public text: string = '';
  public organization$: Observable<OrganizationData> = new Observable();
  public error$: Observable<HttpErrorResponse> = new Observable();
  public subscriptions: Subscription[];
  public organization: OrganizationData;

  constructor(private Store: Store<{ organizationState: OrganizationState }>, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.organization$ = this.Store.select(Selector.SelectStateOrganization);
    this.error$ = this.Store.select(Selector.SelectStateOrganizationError);
    this.getOrganization();
    this.Store.dispatch(Action.getOrganization());
  }

  getOrganization() {
    this.organization$.subscribe((organization) => {
      this.text = organization.long_description;
      this.load = false;
      this.organization = organization;
    });

    this.error$.subscribe((error) => {
      if (error.error) {
        this.load = false;
        let dialog: DialogData = {
          type: DialogType.ERROR,
          header: 'Error al procesar la operación',
          content: 'El listado de miembros de la organización no se ha encontrado.',
        };
        this.dialogService.show(dialog);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
}
