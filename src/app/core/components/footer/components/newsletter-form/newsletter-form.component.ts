import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "@app/core/util/validators/form.validators";
import { getControl as getControlFunction } from "@app/core/util/getControlForm";
@Component({
  selector: "app-newsletter-form",
  templateUrl: "./newsletter-form.component.html",
  styleUrls: ["./newsletter-form.component.scss"],
})
export class NewsletterFormComponent implements OnInit {
  getControl = getControlFunction;
  user_email: string = "";
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, emailValidator()]),
  });

  constructor() {}
  ngOnInit(): void {
    this.checkRegistred();
  }
  submit(): void {
    localStorage.setItem("user_email", this.form.value.email);
    this.checkRegistred();
  }

  checkRegistred(): void {
    this.user_email = localStorage.getItem("user_email") || "";
  }
}
