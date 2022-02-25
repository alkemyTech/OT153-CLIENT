<<<<<<< HEAD
export interface MembersResponse {
  success: boolean;
  data: Members[];
  message: string;
}
export interface Members {
  id: number;
  name: string;
  image: string;
  description: string;
  facebookUrl: string;
  linkedinUrl: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  group_id: number;
}
=======
export interface Member {
    id: number;
    name:        string;
    image:       string;
    description: string;
    facebookUrl: string;
    linkedinUrl: string;
    created_at:  Date;
    updated_at:  Date;
    deleted_at:  Date;
  }
>>>>>>> d9b209e (OT-153_67 create component members list, add path in ts config and configure styles in angular json)
