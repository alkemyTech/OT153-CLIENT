export interface New {
  success: boolean;
  data:    NewData;
  message: string;
}

export interface News {
  success: boolean;
  data:    NewData[];
  message: string;
}

export interface NewData {
    id: number,
    name: string,
    slug: string,
    content: string,
    image: string,
    user_id: number,
    category_id: number,
}