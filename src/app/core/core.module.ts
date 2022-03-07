import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { UserService } from './controllers/userService/user.service';
import { NewsletterFormComponent } from './components/footer/components/newsletter-form/newsletter-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { counterReducer } from './redux/reducers/counter.reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsletterFormComponent, HeaderComponent, FooterComponent ],
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule, 
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer 
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
