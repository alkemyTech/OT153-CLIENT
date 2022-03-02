export enum regex {
  EMAIL_REGEX = '^[^@]+@[^@]+.[a-zA-Z]{2,}$',
  DIGIT_REGEX = '[0-9]',
  WORD_REGEX = '[a-zA-Z]',
  SYMBOLS_REGEX = '[^a-z0-9]',
  ALLDIGITS_REGEX = '^[0-9]+$',
  URL_HTTPS = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
}

export const EMAIL_REGEX: RegExp = new RegExp(regex.EMAIL_REGEX);
export const SYMBOLS_REGEX: RegExp = new RegExp(regex.SYMBOLS_REGEX);
export const DIGIT_REGEX: RegExp = new RegExp(regex.DIGIT_REGEX);
export const WORD_REGEX: RegExp = new RegExp(regex.WORD_REGEX);
export const ALLDIGIT_REGEX: RegExp = new RegExp(regex.ALLDIGITS_REGEX);
export const URL_HTTPS_REGEX:RegExp = new RegExp(regex.URL_HTTPS)
