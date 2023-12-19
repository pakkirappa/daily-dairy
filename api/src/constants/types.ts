export type LoginDto = {
  username: string;
  password: string;
};

export type RegisterDto = {
  username: string;
  password: string;
  email: string;
  name: string;
};

export type JwtDao = {
  id: number;
  username: string;
  name: string;
  max_notebooks: number;
  max_pages: number;
};
