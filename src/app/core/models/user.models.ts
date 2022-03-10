export interface MercadoPagoResponse {
  additional_info: string;
  auto_return: string;
  back_urls: Url;
  binary_mode: boolean;
  client_id: string;
  collector_id: number;
  date_created: Date;
  date_of_expiration: null;
  expiration_date_from: null;
  expiration_date_to: null;
  expires: boolean;
  external_reference: string;
  id: string;
  init_point: string;
  internal_metadata: null;
  items: Donation[];
  marketplace: string;
  marketplace_fee: number;
  notification_url: null;
  operation_type: string;
  payer: Payer;
  payment_methods: PaymentMethods;
  processing_modes: null;
  product_id: null;
  redirect_urls: Url;
  sandbox_init_point: string;
  site_id: string;
  total_amount: null;
  last_updated: null;
}

export interface Url {
  failure: string;
  pending: string;
  success: string;
}

export interface Donation {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  picture_url: string;
  title: string;
  quantity: number;
  unit_price: number;
}

export interface Payer {
  email: string;
  identification: Identification;
  name: string;
  surname: string;
  date_created: null;
  last_purchase: null;
}

export interface Identification {
  number: string;
  type: string;
}

export interface PaymentMethods {
  default_card_id: null;
  default_payment_method_id: null;
  excluded_payment_methods: ExcludedPayment[];
  excluded_payment_types: ExcludedPayment[];
  installments: null;
  default_installments: null;
}

export interface ExcludedPayment {
  id: string;
}

export interface User {
    id?:                number;
    name?:              string;
    email?:             string;
    email_verified_at?: string;
    password?:          string;
    role_id?:           number;
    remember_token?:    string;
    created_at?:        Date | string;
    updated_at?:        Date | string;
    deleted_at?:        Date | string;
    group_id?:          number | null;
    latitude?:          number;
    longitude?:         number;
    address?:           string;
    profile_image?:     string;
    description?:       string;
}

export interface ImgFile {
    id: string;
    imgFile?:string;
}

export interface HTTPResp<T> {
  success: boolean;
  data:    T;
  message: string;
}