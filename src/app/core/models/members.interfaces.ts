export interface MembersResponse {
  success: boolean;
  data: Members[];
  message: string;
}
export interface Members {
  id?: number;
  name: string;
  image?: string | ArrayBuffer | null;
  description: string;
  facebookUrl: string;
  linkedinUrl: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  group_id?: number;
}

