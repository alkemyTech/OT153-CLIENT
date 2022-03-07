import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { UserService } from './controllers/userService/user.service';
import { NewsletterFormComponent } from './components/footer/components/newsletter-form/newsletter-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { RootReduxModule } from './redux/root.redux.module';
import { authReducer } from './redux/reducers/auth.reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [NewsletterFormComponent, HeaderComponent, FooterComponent ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    RootReduxModule,
    StoreModule.forRoot({ 
      authReducer: authReducer,
    }), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),   
    
  ],
  providers: [HttpService, UserService],
  exports: [
    NewsletterFormComponent,
    HeaderComponent, 
    FooterComponent],
})
export class CoreModule {}
