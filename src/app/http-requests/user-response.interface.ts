export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDetails[];
  support: {
    url: string;
    text: string;
  };
}

interface UserDetails {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
