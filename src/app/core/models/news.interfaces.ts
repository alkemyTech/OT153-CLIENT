export interface NewResponse {
  success: boolean;
  data: New;
  message: string;
}

export interface NewsResponse {
  success: boolean;
  data: New[];
  message: string;
}

export interface New {
  id: number;
  name: string;
  slug: string;
  content: string;
  image: string;
  created_at?:  string | null;
  user_id: number;
  category_id: number;
}
