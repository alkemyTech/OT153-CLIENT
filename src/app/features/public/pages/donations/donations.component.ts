import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutproService } from '@app/features/services/checkoutpro.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss'],
})
export class DonationsComponent implements OnInit {
  public form: FormGroup;
  public empty: boolean = false;
  public error: boolean = false;
  public donationVariable: boolean = false;
  public others:any = document.getElementById('donation-edit');
  public importe:number = 0;
  public importeFijo:string[] = ["500","1000","1500","2000","2500","Otro Importe"];
  title: string = 'Hacé tu donación ahora'
  message: string = `En Somos Más trabajamos con los chicos y chicas de la ciudad.
  Realizamos trabajos de inclusion social y todo tipo de ayuda nos viene bien tanto para el comedor como para todos los movimientos sociales que realizamos.`;

  constructor(private _mp: CheckoutproService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      value: ['', [Validators.required, Validators.pattern(/^[0-9]+([.][0-9]+)?$/)]],
    });
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      value: [
        "",[
          Validators.required,
          Validators.pattern(
            /^[0-9]+(\.[0-9][0-9]?)?$/
          )
        ]],          
    });
  }

  hiddenInput(){
    let others:any = document.getElementById('value');
    others.type = 'hidden';
    this.donationVariable = false;
    }
  
    donar1(){
      this.hiddenInput();
      this.importe = parseInt(this.importeFijo[0]);
      this.mp();
    }
  
    donar2(){
      this.hiddenInput();
      this.importe = parseInt(this.importeFijo[1]);
      this.mp();
    }
  
    donar3(){
      this.hiddenInput();
      this.importe = parseInt(this.importeFijo[2]);
      this.mp();
    }
  
    donar4(){
      this.importe = parseInt(this.importeFijo[3]);
      this.mp();
    }
  
    donar5(){
      this.importe = parseInt(this.importeFijo[4]);
      this.mp();
    }
  
    donar6(){
      this.donationVariable = true;
      let others:any = document.getElementById('value');
      others.type = 'text';
  }
  
    mp(){
      let preference = {
        external_reference:"Donacion ONG",
        items:[
            {
              title:"Donacion",
              description:"Somos Más ONG",
              picture_url:"https://ichef.bbci.co.uk/news/800/cpsprodpb/0804/production/_100125020_gettyimages-813128966.jpg.webp",
              category_id: "1234",
              quantity: 1,
              currency_id: "ARS",
              unit_price: this.importe
            }
        ],
        back_urls: {
          success:"http://localhost:4200/gracias",
          failure:"http://localhost:4200/error",
          pending: ""
        }
    }
  
    this._mp.createPreference(preference).subscribe(r => {
  
      window.location.href = r.sandbox_init_point;
  
    });
      
      return true;
    }
  
    donation(){    
      if (!this.form.value.value) {
        this.empty = true;
      } else{
        if (!this.form.valid) {
          this.error = true;
        }  else {
          this.importe = parseFloat(this.form.controls['value'].value);
          this.mp();
        }
      }
  
    }
}
