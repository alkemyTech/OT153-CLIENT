import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Subscription } from "rxjs";
import {
  facebookLinkValidator,
  instagramLinkValidator,
  twitterLinkValidator,
} from "@app/core/util/validators/form.validators";
import { getControl as getControlFunction } from "@app/core/util/getControlForm";
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

  form = this.fb.group(
    {
      name: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      shortDescription: ["", [Validators.required]],
      longDescription: ["", [Validators.required]],
      facebookLink: ["", [facebookLinkValidator()]],
      instagramLink: ["", [instagramLinkValidator()]],
      twitterLink: ["", [twitterLinkValidator()]],
    },
    { updateOn: "change" }
  );
  getControl = getControlFunction;
  imageBuffer: string | ArrayBuffer | null;
  imgMessage: string;
  displaySubmitSpinner: boolean = false;
  subscription: Subscription;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  selectFile(event) {
    let file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      this.imgMessage = "Only images are supported";
      this.imageBuffer = null;
    } else {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgMessage = file.name;
        this.imageBuffer = reader.result;
      };
      reader.onloadend = this.handleReaderLoaded.bind(this);
    }
  }

  handleReaderLoaded(readerEvent) {
    let binaryString = readerEvent.target.result;
    this.form.patchValue({ image: binaryString });
  }

  ckeditorChange({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    this.form.get("longDescription")?.setValue(EditorData);
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }
}
