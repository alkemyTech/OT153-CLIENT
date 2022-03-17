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
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsletterFormComponent],
  imports: [
    CommonModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    RootReduxModule,
    RouterModule
  ],
  providers: [HttpService, UserService],
  exports: [
    NewsletterFormComponent,
    
    ],
})
export class CoreModule {}
