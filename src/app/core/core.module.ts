import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { UserService } from './controllers/userService/user.service';
import { NewsletterFormComponent } from './components/footer/components/newsletter-form/newsletter-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsletterFormComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [HttpService, UserService],
  exports: [NewsletterFormComponent],
})
export class CoreModule {}
