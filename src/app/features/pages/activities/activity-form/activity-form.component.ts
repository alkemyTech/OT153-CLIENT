import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "@app/core/services/http.service";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { PartialObserver, Subscription } from "rxjs";
@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  title = "base-ong-angular-client";

  @Input() formTitle: string;
  @Input() defaultName: string;
  @Input() defaultImage: string;
  @Input() defaultDescription: string;
  @Output() submitForm = new EventEmitter();

  form: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    description: new FormControl(""),
  });

  @ViewChild("image") image: TemplateRef<Event["target"]>;
  imageBuffer: string | ArrayBuffer | null;
  imgMessage: string;
  public Editor = ClassicEditor;
  invalidState: boolean = false;
  loadSubmit: boolean = false;
  subscription: Subscription;

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.form.controls["name"].setValue(this.defaultName);
    this.form.controls["image"].setValue(this.defaultImage);
    console.log("Input descripción: " + this.defaultDescription);

    // this.form.controls["description"].setValue(this.defaultDescription);
    this.imageBuffer = this.defaultImage;
  }

  showViaService() {
    console.log(this.form.value);
  }

  ckeditorChange({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    console.log(EditorData);
    // this.form.patchValue({ description: EditorData });
    // this.form.controls["description"].setValue("test");
    // console.log(this.form.value);
  }

  selectFile(event: any) {
    let file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      this.imgMessage = "Only images are supported";
      this.imageBuffer = "";
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

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      this.invalidState = true;
    } else {
      this.invalidState = false;
      this.loadSubmit = true;
      this.subscription = (
        this.defaultDescription
          ? this.http.patch(
              "http://ongapi.alkemy.org/" /* api/activities" */,
              form.value
            )
          : this.http.post(
              "http://ongapi.alkemy.org/" /* api/activities" */,
              form.value
            )
      ).subscribe(
        (response: PartialObserver<any> | unknown) => {
          this.loadSubmit = false;
          console.log(response);
        },
        (err) => {
          this.loadSubmit = false;
          console.log(err);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
