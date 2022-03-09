import { AbstractControl, FormGroup } from '@angular/forms';
/**
 * Esta es una función que devuelve el controlador del campo del formulario.
 * @param form FormGroup
 * @param controlName Nombre del control
 * @returns AbstractControl || null
 */
export function getControl(form: FormGroup, controlName: string): AbstractControl | null {
  return form.get(controlName);
}
