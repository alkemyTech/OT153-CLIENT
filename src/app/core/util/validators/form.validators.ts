import { ValidatorFn } from "@angular/forms";
import { patternValidator } from './custom.validators';
import { DIGIT_REGEX, WORD_REGEX, SYMBOLS_REGEX, EMAIL_REGEX, ALLDIGIT_REGEX} from '../../enums/regex.enum';

export function digitValidator(): ValidatorFn {
    return patternValidator( DIGIT_REGEX, { hasNumber: true });
}
export function wordValidator(): ValidatorFn {
    return patternValidator( WORD_REGEX, { hasWord: true });
}
export function symbolValidator(): ValidatorFn{
    return patternValidator( SYMBOLS_REGEX, { hasSymbol: true });
}
export function emailValidator(): ValidatorFn {
    return patternValidator( EMAIL_REGEX, { hasEmail: true });
}
export function allDigitValidator(): ValidatorFn {
    return patternValidator( ALLDIGIT_REGEX, { hasAllNumber: true });
}