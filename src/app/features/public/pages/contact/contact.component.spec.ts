import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { PhoneFormatPipe } from '@app/shared/pipes/phone-format.pipe';
import { Organization } from '@app/core/models/organization.interfaces';
import { PublicapiService } from '@app/core/services/publicApi.service';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DialogService } from '@app/core/services/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  let organization: Organization = {
    success: true,
    data: {
      id: 1,
      name: 'Somos Más',
      logo: '',
      short_description: 'Organización no gubernamental',
      long_description: 'Excepteur enim proident magna ipsum aliquip minim ullamco eu',
      welcome_text: 'Voluptate sit aliqua cillum ut aliqua',
      address: 'Street 135',
      phone: '510 614 5142',
      cellphone: '15 45 51 23',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
      group_id: null,
      facebook_url: 'https://facebook.com/test',
      linkedin_url: 'https://www.linkedin.com/in/test/',
      instagram_url: 'https://instagram.com/test',
      twitter_url: 'https://twitter.com/test',
    },
    message: 'Response succesfully!',
  };
  const fakeApiService = jasmine.createSpyObj<PublicapiService>('PublicapiService', {
    getPublicOrganization: of(organization),
  });

  const fakeDialogService = jasmine.createSpyObj<DialogService>('DialogService', {
    show: undefined,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ContactComponent],
      providers: [
        FormBuilder,
        PhoneFormatPipe,
        MessageService,
        { provide: DialogService, useValue: fakeDialogService },
        { provide: PublicapiService, useValue: fakeApiService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a contact form component', () => {
    const { debugElement } = fixture;
    const contactForm = debugElement.query(By.css('app-contact-form'));
    expect(contactForm).toBeTruthy();
  });

  it('should be using leafleet map', () => {
    const { debugElement } = fixture;
    const contactForm = debugElement.query(By.css('app-leaflet-map'));
    expect(contactForm).toBeTruthy();
  });

  it('should call public API service when component is created', () => {
    component.ngOnInit();
    expect(fakeApiService.getPublicOrganization).toHaveBeenCalled();
  });

  it('should render contact info', () => {
    let fixture = TestBed.createComponent(ContactComponent);
    fakeApiService.getPublicOrganization.and.callFake(() => of(organization));
    // Instanciate the component again to avoid 404 error from test below
    component = fixture.componentInstance;
    fixture.detectChanges();
    const { debugElement } = fixture;
    const contactInfo = debugElement.query(By.css('app-contact-info'));
    expect(contactInfo).toBeTruthy();
  });

  it('should show a message when public API response is 404', () => {
    fakeApiService.getPublicOrganization.and.returnValue(
      throwError(new HttpErrorResponse({ error: '404 - Not Found', status: 404 }))
    );
    component.ngOnInit();
    expect(fakeDialogService.show).toHaveBeenCalled();
  });
});
