export interface ActivitiesResponse {
  success: boolean;
  data: Activities[];
  message: string;
}

export interface ActivityResponse {
    success: boolean | null;
    data: Activities;
    message: string;
  }

export interface Activities {
    id: number | string | undefined,
    name: string,
    slug?: string,
    description: string,
    image?: string,
    user_id?: number,
    category_id?: number,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string,
    group_id?: number
}

