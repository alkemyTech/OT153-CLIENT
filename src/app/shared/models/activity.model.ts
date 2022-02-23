export interface ActivityResponse {
  success: boolean | null;
  data: {
    id: number | string | null;
    name: string;
    description: string;
    image: string;
  };
  message: string;
}

/* export interface Activity {
  id: number | string | null;
  name: string;
  description: string;
  image: string;
} */
