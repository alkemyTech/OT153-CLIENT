export interface User {
    success: boolean;
    data:    UserData;
    message: string;
}

export interface Users {
    success: boolean;
    data:    UserData[];
    message: string;
}

export interface UserData {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,  //date
    password: string,
    role_id: number,
    remember_token: string,
    created_at: string,  //date
    updated_at: string,  //date
    deleted_at: string,  //date
    group_id: number,
    latitude: number,
    longitude: number,
    address: string,
    profile_image: string
}


