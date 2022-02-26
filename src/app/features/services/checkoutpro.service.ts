import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MercadoPagoResponse } from '../../core/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class CheckoutproService {
  private MpUrl: string =
    'https://api.mercadopago.com/checkout/preferences?access_token=TEST-2627520740277773-070517-18f5855b3b30f9a4a8a11f2e089872e4-95297332';

  constructor(private http: HttpClient) {}

  createPreference(preference: any): Observable<MercadoPagoResponse> {
    return this.http.post<MercadoPagoResponse>(this.MpUrl, preference);
  }
}
