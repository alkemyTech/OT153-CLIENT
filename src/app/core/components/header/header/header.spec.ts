import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { link } from "@app/core/models/link.interface";
 
describe("Header component", () => {

  const storeMock = jasmine.createSpyObj('Store', ['select']);

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  describe('If user is not authenticated.', () =>{

    beforeEach(async () => {
      storeMock.select.and.returnValue(
        of({
          auth: false,
          isAdmin: false,
          user: null,
          googleUser: null,
          token!: null,
          isGoogleAuth: false
        })
      );
  
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({}, {}),
          FormsModule,
          ReactiveFormsModule,
          CommonModule
        ],
        declarations: [HeaderComponent],
        providers: [
          { provide: Store, useValue: storeMock },
          DialogService,
          MessageService
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should show public links', () => {

      const selectedLinks  = component.linksHome;
  
      const elements = fixture.debugElement.queryAll( By.css('li') );

      let linksLoaded: link[] = [];

      for(const element of elements){
        let link = element.attributes['ng-reflect-router-link']!;
        let text = element.nativeNode.innerText;
        linksLoaded.push( {
          link,
          text
        })
      }

      expect(selectedLinks).toEqual( linksLoaded );
  
    })
  
    it('Should show login and register button', () => {  
  
      const publicButtons = [component.loginHref, component.registerHref];
  
      const domButtons = fixture.debugElement.queryAll(By.css('button'));

      const buttonsHref: string[] = [];
      
      for(const button of domButtons){
        let href = button.attributes['ng-reflect-router-link']!;
        buttonsHref.push(href);
      }

      expect(publicButtons).toEqual(buttonsHref);
  
    })
  
    it('Should restrict access to Newsletter.', () => {  
  
      const selectedLinks = component.linksHome;
      
      let linksLoaded: link[] = [];
  
      const elements = fixture.debugElement.queryAll( By.css('li') );

      for(const element of elements){
        let link = element.attributes['ng-reflect-router-link']!;
        let text = element.nativeNode.innerText;
        linksLoaded.push( {
          link,
          text
        })
      }

      expect(selectedLinks).toEqual( linksLoaded );
  
    })

  })

  describe('If user is authenticated and is not admin', ()=>{

    beforeEach(async () => {
      storeMock.select.and.returnValue(
        of({
          auth: true,
          isAdmin: false,
          user: null,
          googleUser: null,
          token!: null,
          isGoogleAuth: false
        })
      );
  
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({}, {}),
          FormsModule,
          ReactiveFormsModule,
          CommonModule
        ],
        declarations: [HeaderComponent],
        providers: [
          { provide: Store, useValue: storeMock },
          DialogService,
          MessageService
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should hide login and register links', ()=>{
      
      const publicButtons = [component.loginHref, component.registerHref];
        
      const domButtons = fixture.debugElement.queryAll(By.css('button'));

      const buttonsHref: string[] = [];
      
      for(const button of domButtons){
        let href = button.attributes['ng-reflect-router-link']!;
        buttonsHref.push(href);
      }

      expect(publicButtons).not.toEqual(buttonsHref);
      
    })

    it('Should show navigation links', ()=>{
      
      const selectedLinks = component.linksGoogle;
        
      const elements = fixture.debugElement.queryAll( By.css('li') );

      let linksLoaded: link[] = [];

      for(const element of elements){
        let link = element.attributes['ng-reflect-router-link']!;
        let text = element.nativeNode.innerText;
        linksLoaded.push( {
          link,
          text
        })
      }

      expect(selectedLinks).toEqual( linksLoaded );
      
    })

  })

  describe('If user is authenticated and is admin', ()=>{

    beforeEach(async () => {
      storeMock.select.and.returnValue(
        of({
          auth: true,
          isAdmin: true,
          user: null,
          googleUser: null,
          token!: null,
          isGoogleAuth: false
        })
      );
  
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({}, {}),
          FormsModule,
          ReactiveFormsModule,
          CommonModule
        ],
        declarations: [HeaderComponent],
        providers: [
          { provide: Store, useValue: storeMock },
          DialogService,
          MessageService
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should hide Register, Contact and Donation links', () => {
  
      const publicButtons = [component.registerHref];
        
      const domButtons = fixture.debugElement.queryAll(By.css('button'));

      const buttonsHref: string[] = [];
      
      for(const button of domButtons){
        let href = button.attributes['ng-reflect-router-link']!;
        buttonsHref.push(href);
      }

      expect(publicButtons).not.toEqual(buttonsHref);

      const selectedLinks = component.linksBackoffice;
  
      const elements = fixture.debugElement.queryAll( By.css('li') );

      let linksLoaded: link[] = [];

      for(const element of elements){
        let link = element.attributes['ng-reflect-router-link']!;
        let text = element.nativeNode.innerText;
        linksLoaded.push( {
          link,
          text
        })
      }

      expect(selectedLinks).toEqual( linksLoaded );
  
    })

    it('Should show dashboard link', () => {
  
      const selectedLinks = component.linksBackoffice;
      
      const elements = fixture.debugElement.queryAll( By.css('li') );

      let linksLoaded: link[] = [];

      for(const element of elements){
        let link = element.attributes['ng-reflect-router-link']!;
        let text = element.nativeNode.innerText;
        linksLoaded.push( {
          link,
          text
        })
      }
  
      let links = linksLoaded.map( ({ link, text }) => link)

      expect(links).toContain( component.backofficeHref );

    });

  })
 
});
