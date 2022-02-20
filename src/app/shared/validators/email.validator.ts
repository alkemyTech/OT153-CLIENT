import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailFieldValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

        return !isEmailValid ? {emailValid:true}: null;
    }
}