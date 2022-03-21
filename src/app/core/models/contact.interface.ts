export interface ContactFormResponse {
  success: boolean;
  data: ContactForm;
  message: string;
}

export interface ContactForm {
  name: '';
  phone: '';
  email: '';
  message: '';
}
