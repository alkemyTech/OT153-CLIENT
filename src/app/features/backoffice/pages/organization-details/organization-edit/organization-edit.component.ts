import { Component, Input, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpService } from "@app/core/services/http.service";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { facebookLinkValidator } from "@app/core/util/validators/form.validators";
import { getControl } from "@app/core/util/getControlForm";
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
    facebookLink: new FormControl("", facebookLinkValidator),
    instagramLink: new FormControl("", Validators.required),
    twitterLink: new FormControl("", Validators.required),
  });
  imageBuffer: string | ArrayBuffer | null;
  imgMessage: string;
  displaySubmitSpinner: boolean = false;
  subscription: Subscription;
  submitted: boolean = false;

  constructor(
    private http: HttpService,
    private messageService: MessageService
  ) {}

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
      let url = "http://ongapi.alkemy.org/api/activities";
      this.httpSendActivity(url, form);
    }
  }

  httpSendActivity(url: string, form: FormGroup) {
    this.displaySubmitSpinner = true;
    this.messageService.add({
      severity: "info",
      summary: "Cargando actividad...",
    });

    this.subscription = (
      this.defaultName
        ? this.http.patch(url, form.value)
        : this.http.post(url, form.value)
    ).subscribe(
      (response) => {
        this.displaySubmitSpinner = false;
        this.messageService.add({
          severity: "success",
          summary: "Enviado!",
          detail: "La actividad fue cargada exitosamente.",
        });
      },
      (err) => {
        this.displaySubmitSpinner = false;
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `${err.status} ${err.statusText}`,
        });
      }
    );
  }

  validateRegex(control: string) {
    /*   const form_control = this.form.get(control);
    if (!form_control?.validator) {
      return false;
    }

    const validator = form_control.validator({} as AbstractControl);
    return validator; */

    return this.form.get("facebookLink")?.validator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
