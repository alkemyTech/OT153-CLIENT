import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
  selector: "app-organization-edit",
  templateUrl: "./organization-edit.component.html",
  styleUrls: ["./organization-edit.component.scss"],
})
export class OrganizationEditComponent implements OnInit {
  public Editor = ClassicEditor;
  @Input() defaultName: string;
  @Input() defaultLogo: string;
  @Input() defaultShortDescription: string;
  @Input() defaultLongDescription: string;
  @Input() defaultInstagramLink: string;
  @Input() defaultFacebookLink: string;
  @Input() defaultTwitterLink: string;

  form: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    logo: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    longDescription: new FormControl("", Validators.required),
    instagramLink: new FormControl("", Validators.required),
    facebookLink: new FormControl("", Validators.required),
    twitterLink: new FormControl("", Validators.required),
  });
  imageBuffer: string | ArrayBuffer | null;
  imgMessage = "mensaje imagen";
  loadSubmit = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {}

  ckeditorChange(event) {
    console.log(event);
  }

  selectFile(event) {}

  showSpinner() {
    this.loadSubmit = !this.loadSubmit;
  }
}
