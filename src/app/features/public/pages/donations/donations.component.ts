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
  public importe: number = 0;
  title: string = 'Hola! Bienvenidos!';
  message: string = `En Somos Más trabajamos con los chicos y chicas de la ciudad.
  Realizamos trabajos de inclusion social y todo tipo de ayuda nos viene bien tanto para el comedor como para todos los movimientos sociales que realizamos.`;

  constructor(private _mp: CheckoutproService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      value: ['', [Validators.required, Validators.pattern(/^[0-9]+([.][0-9]+)?$/)]],
    });
  }

  ngOnInit(): void {}

  donation() {
    if (!this.form.value.value) {
      this.empty = true;
      return false;
    } else {
      this.importe = parseFloat(this.form.controls['value'].value);
      let preference = {
        external_reference: 'Donacion ONG',
        items: [
          {
            title: 'Donacion',
            description: 'Somos Más ONG',
            picture_url:
              'https://ichef.bbci.co.uk/news/800/cpsprodpb/0804/production/_100125020_gettyimages-813128966.jpg.webp',
            category_id: '1234',
            quantity: 1,
            currency_id: 'ARS',
            unit_price: this.importe,
          },
        ],
        back_urls: {
          success: 'http://localhost:4200/gracias',
          failure: 'http://localhost:4200/error',
          pending: '',
        },
      };

      this._mp.createPreference(preference).subscribe((r) => {
        window.location.href = r.sandbox_init_point;
      });

      return true;
    }
  }
}
