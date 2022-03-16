import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable, Subscription } from 'rxjs';
import {
  facebookLinkValidator,
  instagramLinkValidator,
  twitterLinkValidator,
} from '@app/core/util/validators/form.validators';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { Store } from '@ngrx/store';
import { OrganizationState } from '@app/core/models/organization-state.interface';
import {
  OrganizationSelector as Selector,
  OrganizationActions as Action,
} from '@app/core/redux/organization/organization.index';
import { Organization, OrganizationData } from '@app/core/models/organization.interfaces';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss'],
})
export class OrganizationEditComponent implements OnInit, OnDestroy {
  public Editor = ClassicEditor;
  @Input() defaultName: string;
  @Input() defaultLogo: string;
  @Input() defaultShortDescription: string;
  @Input() defaultLongDescription: string;
  @Input() defaultInstagramLink: string;
  @Input() defaultFacebookLink: string;
  @Input() defaultTwitterLink: string;

  form = this.fb.group(
    {
      name: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      longDescription: ['', [Validators.required]],
      facebookLink: ['', [facebookLinkValidator()]],
      instagramLink: ['', [instagramLinkValidator()]],
      twitterLink: ['', [twitterLinkValidator()]],
    },
    { updateOn: 'change' }
  );
  getControl = getControlFunction;
  imageBuffer: string | ArrayBuffer | null;
  imgMessage: string;
  displaySubmitSpinner: boolean = false;
  submitted: boolean = false;
  subscriptions: Subscription[] = [];
  organization: OrganizationData;
  postOrganization$: Observable<Organization> = new Observable();
  error$: Observable<HttpErrorResponse> = new Observable();
  responseMessage: string;
  constructor(private fb: FormBuilder, private Store: Store<{ organizationState: OrganizationState }>) {}

  ngOnInit(): void {
    this.postOrganization$ = this.Store.select(Selector.SelectStateOrganization);
    this.error$ = this.Store.select(Selector.SelectStateOrganizationError);
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
    this.form.patchValue({ logo: binaryString });
  }

  ckeditorChange({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    this.form.get('longDescription')?.setValue(EditorData);
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      this.postOrganization(form);
    }
  }

  postOrganization(form: FormGroup) {
    this.organization = form.value;
    this.Store.dispatch(Action.postOrganization({ body: this.organization }));
    this.subscriptions.push(
      this.postOrganization$.subscribe((res) => {
        this.responseMessage = 'Se actualizó la organización!';
      })
    );
    this.subscriptions.push(this.error$.subscribe((err) => {}));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
}
