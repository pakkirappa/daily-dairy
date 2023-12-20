export type Notebook = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Page = {
  id: number;
  notebook_id: number;
  content: string;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: number;
};
