import { ComponentFixture, fakeAsync, TestBed, async, tick } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MemberResponse } from '@core/models/members.interfaces';
import { MembersFormComponent } from './members-form.component';
import { MessageService } from 'primeng/api';
import { of} from 'rxjs';
import { DialogService } from '@core/services/dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Location } from "@angular/common";
import { Router, Routes } from '@angular/router';



describe('Test MembersFormComponent', () => {
  let component: MembersFormComponent;
  let fixture: ComponentFixture<MembersFormComponent>;

  describe('Check of Members Form component', () => {
    let location: Location;
    let router: Router;
  
    const mockStore = jasmine.createSpyObj('Store', ['select','dispatch']);
    
    beforeEach(async () => {
  
      let members: MemberResponse = {
        success: true,
        data: {
          id: 1,
          name: "Esteban",
          image:  "http://ongapi.alkemy.org/storage/Lw0gtGDgWr.png",
          description: "<p>fdsafdsa</p>",
          facebookUrl: "facebook@gmail.com",
          linkedinUrl: "linkedin@gmail.com",
          created_at: "2022-02-09T15:02:22.000000Z",
          updated_at: "2022-02-09T15:02:22.000000Z",
          deleted_at: "",
          group_id: 153
        },
        message: 'Response succesfully!',
      };
      let route: Routes = [
          { path: 'miembros', component: MembersFormComponent },
          { path: 'miembros/:id', component: MembersFormComponent },
      ]
  
    
      mockStore.select.and.returnValue(
        of(members)
      );
    
      mockStore.dispatch()
  
  
   TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes(route),
            StoreModule.forRoot({}, {}),
            FormsModule,
            ReactiveFormsModule,
            HttpClientTestingModule,
            CommonModule
          ],
          declarations: [MembersFormComponent],
          providers: [
            { provide: Store, useValue: mockStore },
              DialogService,
              MessageService
          ],
        }).compileComponents();
        
      });
  
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MembersFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.inject(Router);
      location = TestBed.inject(Location); 
      router.initialNavigation();
    });
    it('should create form', () => {
      expect( component.form.contains('name')).toBeTruthy();
      expect( component.form.contains('description')).toBeTruthy();
      expect( component.form.contains('image')).toBeTruthy();
      expect( component.form.contains('fbLink')).toBeTruthy();
      expect( component.form.contains('liLink')).toBeTruthy();
    });
  
    it("Name field should be required",()=>{
      const control = component.form.get('name');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("Description field should be required",()=>{
      const control = component.form.get('description');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("Image field should be required",()=>{
      const control = component.form.get('image');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("FbLink field should be required",()=>{
      const control = component.form.get('fbLink');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("LiLink field should be required",()=>{
      const control = component.form.get('liLink');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
      });
  
    it('navigate to "" redirects you to /miembros', fakeAsync(() => {
      router.navigate(['/miembros']);
      tick();
      expect(location.path()).toBe('/miembros');
    }));
  
  });

  describe('Check of Members route', () => {
    let location: Location;
    let router: Router;
  
    const mockStore = jasmine.createSpyObj('Store', ['select','dispatch']);
    
    beforeEach(async () => {
  
      let members: MemberResponse = {
        success: true,
        data: {
          id: 1,
          name: "Esteban",
          image:  "http://ongapi.alkemy.org/storage/Lw0gtGDgWr.png",
          description: "<p>fdsafdsa</p>",
          facebookUrl: "facebook@gmail.com",
          linkedinUrl: "linkedin@gmail.com",
          created_at: "2022-02-09T15:02:22.000000Z",
          updated_at: "2022-02-09T15:02:22.000000Z",
          deleted_at: "",
          group_id: 153
        },
        message: 'Response succesfully!',
      };
      let route: Routes = [
          { path: 'miembros', component: MembersFormComponent },
          { path: 'miembros/:id', component: MembersFormComponent },
      ]
  
    
      mockStore.select.and.returnValue(
        of(members)
      );
    
      mockStore.dispatch()
  
  
   TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes(route),
            StoreModule.forRoot({}, {}),
            FormsModule,
            ReactiveFormsModule,
            HttpClientTestingModule,
            CommonModule
          ],
          declarations: [MembersFormComponent],
          providers: [
            { provide: Store, useValue: mockStore },
              DialogService,
              MessageService
          ],
        }).compileComponents();
        
      });
  
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MembersFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.inject(Router);
      location = TestBed.inject(Location); 
      router.initialNavigation();
    });
  
    it('navigate to "" redirects you to /miembros', fakeAsync(() => {
      router.navigate(['/miembros/25']);
      tick();
      expect(location.path()).toBe('/miembros/25');
    }));
  
  });

  describe('Check of Members actions', () => {
    let location: Location;
    let router: Router;
  
    const mockStore = jasmine.createSpyObj('Store', ['select','dispatch']);
    
    beforeEach(async () => {
  
      let members: MemberResponse = {
        success: true,
        data: {
          id: 1,
          name: "Esteban",
          image:  "http://ongapi.alkemy.org/storage/Lw0gtGDgWr.png",
          description: "<p>fdsafdsa</p>",
          facebookUrl: "facebook@gmail.com",
          linkedinUrl: "linkedin@gmail.com",
          created_at: "2022-02-09T15:02:22.000000Z",
          updated_at: "2022-02-09T15:02:22.000000Z",
          deleted_at: "",
          group_id: 153
        },
        message: 'Response succesfully!',
      };
      let route: Routes = [
          { path: 'miembros', component: MembersFormComponent },
          { path: 'miembros/:id', component: MembersFormComponent },
      ]
  
    
      mockStore.select.and.returnValue(
        of(members)
      );
    
      mockStore.dispatch()
  
  
   TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes(route),
            StoreModule.forRoot({}, {}),
            FormsModule,
            ReactiveFormsModule,
            HttpClientTestingModule,
            CommonModule
          ],
          declarations: [MembersFormComponent],
          providers: [
            { provide: Store, useValue: mockStore },
              DialogService,
              MessageService
          ],
        }).compileComponents();
        
      });
  
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MembersFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.inject(Router);
      location = TestBed.inject(Location); 
      router.initialNavigation();
    });
   
    it("Should call postMember when the form is valid",async ()=>{
      const spy = spyOn(component, 'postMember');
      component.form.get('name')?.setValue('name');
      component.form.get('description')?.setValue('description');
      component.form.get('image')?.setValue('image');      
      component.form.get('fbLink')?.setValue('fbLink');
      component.form.get('liLink')?.setValue('liLink');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn_submit").click();

      expect(mockStore.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });

    it("Should call patchMember when the form is valid",async ()=>{
      component.newForm = false;
      const spy = spyOn(component, 'patchMember');
      component.form.get('name')?.setValue('name');
      component.form.get('description')?.setValue('description');
      component.form.get('image')?.setValue('image');      
      component.form.get('fbLink')?.setValue('fbLink');
      component.form.get('liLink')?.setValue('liLink');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn_submit").click();

      expect(mockStore.dispatch).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });
  
  });

});



