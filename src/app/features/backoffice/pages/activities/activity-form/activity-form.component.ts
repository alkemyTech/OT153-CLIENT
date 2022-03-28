import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NewActivity, Activities } from '@core/models/activities.interfaces';
import { activitiesState } from '@app/core/models/activities-state.interface';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable, ObservableInput, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import {
  ActivitiesSelector as Selector,
  ActivitiesActions as Actions,
} from '@app/core/redux/activities/activities.index';
import { catchError, delay } from 'rxjs/operators';
import { DialogData } from '@app/core/models/dialog.inteface';
import { DialogType } from '@app/core/enums/dialog.enum';
import { DialogService } from '@app/core/services/dialog.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
  providers: [MessageService],
})
export class ActivityFormComponent implements OnInit, OnChanges, OnDestroy {
  title = 'base-ong-angular-client';

  @Input() formTitle: string;
  @Input() defaultName: string | null | undefined;
  @Input() defaultImage: string | null | undefined;
  @Input() defaultDescription: string | boolean | null | undefined = '';
  @Input() voidCKeditor: boolean = false; //
  @Input() errorMessage: string = 'No se encontró la actividad'; //
  @Input() successMessage: string = 'Operación exitosa!'; //

  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl(''),
    },
    { updateOn: 'change' }
  );

  public Editor = ClassicEditor;
  @ViewChild('image') image: TemplateRef<Event['target']>;
  imageBuffer: string | ArrayBuffer | null | undefined;
  imgMessage: string;
  submitted: boolean = false;
  displaySubmitSpinner: boolean = false;
  private subscriptions : Subscription[] = [];


  error$: Observable<HttpErrorResponse> = new Observable();
  errorResponse: HttpErrorResponse;
  success$: Observable<Activities> = new Observable();
  activity$: Observable<Activities> = new Observable();
  dialog: DialogData | undefined;

  constructor(
    private Store: Store<{ activitiesState: activitiesState }>, 
    private dialogService: DialogService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activity$ = this.Store.select(Selector.SelectStateOneData);
    this.error$ = this.Store.select(Selector.SelectStateError);
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // listen to async @Input changes from parent data binding
    if (changes['defaultName']) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.form.get('name')?.setValue(this.defaultName);
    this.form.get('description')?.setValue(this.defaultDescription);
    this.form.get('image')?.setValue(this.defaultImage);

    this.imageBuffer = this.defaultImage;
  }

  ckeditorChange({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    this.form.get('description')?.setValue(EditorData);
  }

  selectFile(event) {
    let file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      this.imgMessage = 'Only images are supported';
      this.imageBuffer = null;
    } else {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgMessage = file.name;
        this.imageBuffer = reader.result;
      };
      reader.onloadend = this.handleReaderLoaded.bind(this);
    }
  }

  handleReaderLoaded(readerEvent) {
    let binaryString = readerEvent.target.result;
    this.form.patchValue({ image: binaryString });
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      this.httpSendActivity(form);
    }
  }

  private success() {
    this.success$ = this.Store.select(Selector.SelectStateOneData);
    const successSubscribe = this.success$.subscribe({
      next: (success) => {
        if (!this.errorResponse || this.errorResponse.status === 0) {
          if (success.name != '' && !this.dialog) {
            this.dialog = { type: DialogType.SUCCESS, header: 'Enviado!', content: this.successMessage };
            this.dialogService.show(this.dialog);
          }
        }
      },
    });
    this.subscriptions.push(successSubscribe);
  }

  private error() {
    this.error$ = this.Store.select(Selector.SelectStateError);
    const errorSubscribe = this.error$.subscribe({
      next: (error: HttpErrorResponse) => {
        this.errorResponse = error;
        if (!this.dialog && error.status !== 0) {
          this.dialog = { type: DialogType.ERROR, header: 'ERROR', content: `${this.errorMessage}` };
          this.dialogService.show(this.dialog);
        }
      },
    });
    this.subscriptions.push(errorSubscribe);
  }

  httpSendActivity(form: FormGroup) {
    this.displaySubmitSpinner = true;
    this.error();
    this.success();
    const _body: NewActivity = {
      name: form.get('name')?.value,
      description: form.get('description')?.value,
      image: form.get('image')?.value,
    };

    let _id;
    this.activity$.subscribe({
      next: (response: Activities) => {
        _id = response.id;
      },
      error: (error) => {},
      complete: () => {},
    });

    if (this.defaultName) {
      this.Store.dispatch(Actions.updateActivities({ id: _id, body: _body }));
    } else {
      this.Store.dispatch(Actions.insertActivities({ body: _body }));
      this.dialog = undefined;
    }

    const storeSelectSubscription = this.Store.select(Selector.SelectStateOneData).subscribe({
      next: (response) => {
        delay(10000);
        this.displaySubmitSpinner = false;
      },
      error: (err) => {
        delay(10000);
        this.displaySubmitSpinner = false;
      },
      complete: () => {},
    });
    this.subscriptions.push(storeSelectSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.map( s => s.unsubscribe())
  }
}
