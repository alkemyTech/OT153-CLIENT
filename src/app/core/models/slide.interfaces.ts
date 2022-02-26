export interface Slide {
  success: boolean;
  data: SlideData;
  message: string;
}

export interface Slides {
  success: boolean;
  data: SlideData[];
  message: string;
}

export interface SlideData {
  id: number;
  name: string;
  description: string;
  image: string;
  order: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
