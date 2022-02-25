import { ValidatorFn } from "@angular/forms";
import { patternValidator } from "./custom.validators";
import { DIGIT_REGEX, WORD_REGEX, SYMBOLS_REGEX, EMAIL_REGEX, ALLDIGIT_REGEX, FACEBOOK_REGEX, INSTAGRAM_REGEX, TWITTER_REGEX } from "../../enums/regex.enum";

export function digitValidator(): ValidatorFn {
  return patternValidator(DIGIT_REGEX, { hasNumber: true });
}
export function wordValidator(): ValidatorFn {
  return patternValidator(WORD_REGEX, { hasWord: true });
}
export function symbolValidator(): ValidatorFn {
  return patternValidator(SYMBOLS_REGEX, { hasSymbol: true });
}
export function emailValidator(): ValidatorFn {
  return patternValidator(EMAIL_REGEX, { hasEmail: true });
}
export function allDigitValidator(): ValidatorFn {
  return patternValidator(ALLDIGIT_REGEX, { hasAllNumber: true });
}
export function facebookLinkValidator(): ValidatorFn {
  return patternValidator(FACEBOOK_REGEX, { hasLink: true });
}
export function instagramLinkValidator(): ValidatorFn {
  return patternValidator(INSTAGRAM_REGEX, { hasLink: true });
}
export function twitterLinkValidator(): ValidatorFn {
  return patternValidator(TWITTER_REGEX, { hasLink: true });
}
