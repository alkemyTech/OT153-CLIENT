import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "@app/core/util/validators/form.validators";

@Component({
  selector: "app-newsletter-form",
  templateUrl: "./newsletter-form.component.html",
  styleUrls: ["./newsletter-form.component.scss"],
})
export class NewsletterFormComponent implements OnInit {
  constructor() {}
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, emailValidator()]),
  });
  user_email: string = "";

  ngOnInit(): void {
    this.checkRegistred();
  }
  submit(): void {
    localStorage.setItem("user_email", this.form.value.email);
    this.checkRegistred();
  }

  get email() {
    return this.form.get("email");
  }

  checkRegistred(): void {
    this.user_email = localStorage.getItem("user_email") || "";
  }
}
