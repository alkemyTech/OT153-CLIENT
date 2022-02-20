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
