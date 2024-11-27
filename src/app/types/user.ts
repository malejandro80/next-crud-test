export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type SupportInfo = {
  url: string;
  text: string;
};

export type PaginatedResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: SupportInfo;
};
