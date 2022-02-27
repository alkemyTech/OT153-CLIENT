import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "@app/core/services/http.service";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Subscription } from "rxjs";
import { MessageService } from "primeng/api";
import { PrivateApiService } from "@app/core/services/privateApi.service";

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
  providers: [MessageService],
})
export class ActivityFormComponent implements OnInit, OnChanges, OnDestroy {
  title = 'base-ong-angular-client';

  @Input() formTitle: string;
  @Input() defaultName: string | null;
  @Input() defaultImage: string | null;
  @Input() defaultDescription: string | boolean | null = '';
  @Input() voidCKeditor: boolean = false; //

  form: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl(''),
    },
    { updateOn: 'change' }
  );

  public Editor = ClassicEditor;
  @ViewChild('image') image: TemplateRef<Event['target']>;
  imageBuffer: string | ArrayBuffer | null;
  imgMessage: string;
  submitted: boolean = false;
  displaySubmitSpinner: boolean = false;
  subscription: Subscription;

<<<<<<< HEAD
  constructor(private http: HttpService, private messageService: MessageService) {}
=======
  constructor(
    private http: HttpService,
    private httpPrivate: PrivateApiService,
    private messageService: MessageService
  ) {}
>>>>>>> added patch method in privateApi.service.ts

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // listen to async @Input changes from parent data binding
    if (changes['defaultName']) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.form.get('name')?.setValue(this.defaultName);
    this.form.get('description')?.setValue(this.defaultDescription);
    this.form.get('image')?.setValue(this.defaultImage);

    this.imageBuffer = this.defaultImage;
  }

  ckeditorChange({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    this.form.get('description')?.setValue(EditorData);
  }

  selectFile(event) {
    let file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      this.imgMessage = 'Only images are supported';
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

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      let url = 'http://ongapi.alkemy.org/api/activities';
      this.httpSendActivity(url, form);
    }
  }

  httpSendActivity(url: string, form: FormGroup) {
    this.displaySubmitSpinner = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Cargando actividad...',
    });

    this.subscription = (
<<<<<<< HEAD
      this.defaultName ? this.http.patch(url, form.value) : this.http.post(url, form.value)
=======
      this.defaultName
        ? this.httpPrivate.patch(url, form.value)
        : this.http.post(url, form.value)
>>>>>>> added patch method in privateApi.service.ts
    ).subscribe(
      (response) => {
        this.displaySubmitSpinner = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Enviado!',
          detail: 'La actividad fue cargada exitosamente.',
        });
      },
      (err) => {
        this.displaySubmitSpinner = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${err.status} ${err.statusText}`,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
