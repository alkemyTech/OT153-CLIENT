import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Slide, SlideData, Slides } from '../../../../core/models/slide.interfaces';
import { PrivateService } from '../../../services/private.service';
import { Organization, OrganizationData } from '../../../../core/models/organization.interfaces';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public slides: SlideData[];
  public selectedId: number;
  public selectedSlide: SlideData;
  public uploadedFile: File | null;
  public loading: boolean = false;
  public welcomeText: string;
  public organizationId: number;
  public organizationObject: OrganizationData;
  public logo64: string;
  public imageText: string;
  public loadingWelcome: boolean = false;
  public urlSlide: string = 'http://ongapi.alkemy.org/api/slides';
  public urlOrganization: string = 'http://ongapi.alkemy.org/api/organization';

  public Editor = ClassicEditor;
  public config = { placeholder: 'Descripción' };

  homeForm: FormGroup = this.fb.group({
    welcome: ['', [Validators.required, Validators.minLength(20)]],
    name: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor( 
    private fb: FormBuilder, 
    private privateService: PrivateService, 
    private http: HttpClient,
    private messageService: MessageService
  ) {  }
  
  ngOnInit(): void {    
    this.privateService.get<Slides>(this.urlSlide).subscribe(resp => {
      this.slides = resp.data;
    });
    
    this.privateService.get<Organization>(this.urlOrganization).subscribe(resp => {
      this.welcomeText = resp.data.welcome_text;
      this.organizationId = resp.data.id;
      this.organizationObject = resp.data;
      this.homeForm.get('welcome')?.setValue(this.welcomeText);
      this.convertToBase64(resp.data.logo)
    })

    this.homeForm.markAllAsTouched();
  }
  
  invalidField(field: string) {
    return this.homeForm.get(field)?.invalid && this.homeForm.get(field)?.touched;
  }

  selectImage(id: number){
    this.loading = true
    this.selectedId = id;
    let slide = this.privateService.get<Slide>(this.urlSlide, id).subscribe(
      resp => {
        this.selectedSlide = resp.data;
        this.imageText = resp.data.name;
        this.homeForm.get('name')?.setValue(this.imageText)
        this.loading = false;
      }
    )
  }

  updateWelcomeText(text: string){
    this.loadingWelcome = true;
    this.organizationObject.welcome_text = text;
    this.organizationObject.logo = this.logo64;
    this.privateService.put<Organization>( `${this.urlOrganization}/${this.organizationId}`, this.organizationObject).subscribe(resp => {
      if(resp.success){
        this.messageService.add({
          key: 'toastMessage',
          severity: 'success',
          summary: 'Successfully updated',
        })
      }else{
        this.messageService.add({
          key: 'toastMessage',
          severity: 'error',
          summary: resp.message,
        })
      }
      this.loadingWelcome = false;
    })
  }

  convertToBase64(url: string){
    this.http.get(url, { responseType: "blob" }).subscribe(blob => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        this.logo64 = event.target.result;
      };
      reader.onerror = (event: any) => {
        this.messageService.add({
          key: 'toastMessage',
          severity: 'error',
          summary: event.target.error.code,
        })
      };
    });
  }


}
