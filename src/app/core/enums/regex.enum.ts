export enum regex {
    EMAIL_REGEX = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",
    DIGIT_REGEX = "[0-9]",
    WORD_REGEX = "[a-zA-Z]",
    SYMBOLS_REGEX = "[^a-z0-9]",
}

export const EMAIL_REGEX: RegExp = new RegExp(regex.EMAIL_REGEX);
export const SYMBOLS_REGEX: RegExp = new RegExp(regex.SYMBOLS_REGEX);
export const DIGIT_REGEX: RegExp = new RegExp(regex.DIGIT_REGEX);
export const WORD_REGEX: RegExp = new RegExp(regex.WORD_REGEX);
