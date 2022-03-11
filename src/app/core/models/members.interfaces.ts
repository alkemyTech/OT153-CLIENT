export interface MembersResponse {
  success: boolean;
  data: Member[];
  message: string;
}

export interface MemberResponse {
  success: boolean;
  data: Member;
  message: string;
}

export interface Member {
  id?: number;
  name: string;
  image?: string | ArrayBuffer | null;
  description?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  group_id?: number;
}

