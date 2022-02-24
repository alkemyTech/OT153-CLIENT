import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from '../../../../core/services/http.service';
import { SlideData, Slide, Slides } from '../../../../core/models/slide.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public config = { placeholder:'Descripción'};
  public orderMessage: string = 'Debe asignar el órden de la imágen';
  public uploadedFile: File;
  public slideData: SlideData;
  public imageUrl: string;
  public edit: boolean = false;
  public orders: number[] = [];
  public dbOrder: number;
  public url: string = 'http://ongapi.alkemy.org/api/slides/';
  
  slideForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(4)]],
      order: ['', [Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
    }   
  );

  constructor( 
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getData(params['id']);      
    })

    this.slideForm.markAllAsTouched();
  }

  onSelect(event) {
    if(!event.currentFiles[0]) return
    let file = event.currentFiles[0];
    if(event.currentFiles[0].type === 'image/jpeg'){
      this.uploadedFile = event.files;
      this.slideForm.controls['image'].setValue(file ? file.name : '');
    }
  }

  onRemove(){
    this.slideForm.get('image')?.setValue('');
  }

  invalidField(field: string) {
    return (
      this.slideForm.get(field)?.invalid &&
      this.slideForm.get(field)?.touched
    );
  }
  
  getData(id: Number){
    if(id){
      let url = this.url+id;
      this.httpService.get<Slide>(url, true).subscribe((resp)=> {
        const {success, data} = resp;
        if(success && data.id){
          this.slideForm.get('name')?.setValue(data.name)
          this.slideForm.get('order')?.setValue(data.order)
          this.slideForm.get('description')?.setValue(data.description)
          this.imageUrl = resp.data.image;
          this.dbOrder = resp.data.order;
          if(this.imageUrl){
            this.slideForm.get('image')?.setErrors(null);
            this.edit = true;
          }
          this.getOrders();
        }
      })
    }else{
      this.edit = false;
    }
  }

  getOrders(){
    this.httpService.get<Slides>(this.url).subscribe((resp) =>{
      let data: SlideData[] = resp.data;      
      data.map((slide)=>{
        if(slide.order != this.dbOrder){
          this.orders.push(slide.order);
        }
      })
    })
  }


  convertToBase64(url: string) {
    this.http.get(url, { responseType: "blob" }).subscribe(blob => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        //Here you can do whatever you want with the base64 String
        // console.log("File in Base64: ", event.target.result);
        this.uploadedFile = event.target.result;
      };

      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
      };
    });
  }


  orderError(event){
    console.log(this.slideForm);
    let value = parseInt(event.target.value);
    if( isNaN(value)|| value < 0){      
      this.orderMessage = 'Debe asignar el órden de la imágen, debe ser un número mayor a 0';
      this.slideForm.get('order')?.setErrors({'incorrect': true});
    }else{
      if(this.orders.includes(value) && value != this.dbOrder && value != NaN){
        this.slideForm.get('order')?.setErrors({'incorrect': true});
        this.orderMessage = `El orden debe ser distinto a  (${this.orders.join(', ')})`;
      }else{
        this.slideForm.get('order')?.setErrors(null);
      }
    }
  }

  submitForm() {
    this.slideForm.markAllAsTouched();
    console.log('FORM VALID:', this.slideForm.valid);
    this.httpService.patch(this.url, {asd: 123})
  }


}
