import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getControl as getControlFunction } from '@app/core/util/getControlForm';
import { HttpService } from '@app/core/services/http.service';
import { PrivateApiService } from '@app/core/services/privateApi.service';
import { Members } from '@app/core/models/members.interfaces';
import { URL_HTTPS_REGEX } from '@app/core/enums/regex.enum';
@Component({
  selector: 'alk-members-form',
  templateUrl: './members-form.component.html',
  styleUrls: ['./members-form.component.scss']
})
export class MembersFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: FileUpload;
  @Input() routerLink: string;
  @Input() id: number | null;
  private classicEditor = ClassicEditor;
  private url: string = 'api/members';
  public isLoading: boolean = false;
  public uploadedFile: File | null;
  public base64Image: string | ArrayBuffer | null;  
  public config;
  public imageUrl: string | ArrayBuffer;
  public newForm: boolean = true;



  public form: FormGroup;
  public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public description: FormControl = new FormControl('', [Validators.required]);
  public image: FormControl = new FormControl('', [Validators.required]);
  public fbLink: FormControl = new FormControl('',[Validators.required,Validators.pattern(URL_HTTPS_REGEX)])
  public liLink: FormControl = new FormControl('',[Validators.required,Validators.pattern(URL_HTTPS_REGEX)])
  public getControl = getControlFunction;

  constructor(private formBuilder: FormBuilder,private http:HttpService, private httpPrivate:PrivateApiService) { }

  ngOnInit(): void {
    this.form = this.createForm()
    this.config = { placeholder: 'Contenido' };
    this.defineCreateOrEdit()
  }

  defineCreateOrEdit():void{
    if (this.id == null){
      this.newForm = true
    } else {
      this.newForm = false
      this.getMembers(this.id)
    }

  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.name,
      description: this.description,
      image: this.image,
      fbLink: this.fbLink,
      liLink:this.liLink
    });
  }
  submit(){

   if(this.newForm){
     this.postMember();
   } else {
     this.patchMember();
   }
  }
  get editor(): any {
    return this.classicEditor;
  }

  onSelect(event) {
    if (!event.currentFiles[0]) return;
    let file = event.currentFiles[0];
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result;
      };
      this.uploadedFile = file;
      this.form.controls['image'].setValue(file ? file.name : '');
    }
  }
    onRemove() {
    this.image?.setValue('');
    this.base64Image = '';
    this.uploadedFile = null;
  }

  getMembers(id:number | null):void{
    let url = `${this.url}/${id}`;
    this.http.get<Members>(url).subscribe((res)=>{
      const data = res;
      this.form.get('name')?.setValue(data.name);
      this.form.get('description')?.setValue(data.description);
      this.form.get('image')?.setValue(data.image);
      this.form.get('fbLink')?.setValue(data.facebookUrl);
      this.form.get('liLink')?.setValue(data.linkedinUrl);
      this.imageUrl = data.image? data.image : ''
    })
  }

  postMember():void{
    const { name, description , fbLink ,liLink} = this.form.value;
    let image = this.base64Image;
    const body:Members = {
      name:name,
      description: description,
      facebookUrl:fbLink, 
      linkedinUrl:liLink,
      image:image
    }
    this.httpPrivate.post<Members>(this.url,body).subscribe(
      (res)=>{
      this.fileInput.clear();
      this.form.reset();
      // Alerta de exito
    },
      (error)=>{
      // Alerta de error
    })
  }

  patchMember():void{
    let url = `${this.url}/${this.id}`;
    const { name, description, fbLink ,liLink } = this.form.value;
    let body: Members;
    if (this.uploadedFile) {
      let image = this.base64Image;
      body =  {
      name:name,
      description: description,
      facebookUrl:fbLink, 
      linkedinUrl:liLink,
      image:image
    };
    } else {
      body =  {
      name:name,
      description: description,
      facebookUrl:fbLink, 
      linkedinUrl:liLink,
    };
    }
    this.httpPrivate.patch<Members>(url,body).subscribe(
      (res)=>{
      // Alerta de exito
    },
     (error)=>{
      // Alerta de error
      })
  }

}
