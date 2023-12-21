import { atom } from "jotai";
import { User, Notebook, Page } from "../constants/types";

const test_notebooks: Notebook[] = [
  {
    id: 1,
    created_at: "2021-05-01T00:00:00.000Z",
    name: "General",
    updated_at: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 2,
    created_at: "2021-05-01T00:00:00.000Z",
    name: "Day Wise To Do List",
    updated_at: "2021-05-01T00:00:00.000Z",
  },
];

const test_pages = [
  {
    id: 1,
    notebook_id: 1,
    content: "This is a test page",
    created_at: "1st November 2023",
    updated_at: "8th November 2023",
  },
  {
    id: 1,
    notebook_id: 2,
    content: "This is a page pag2",
    created_at: "1st November 2023",
    updated_at: "2nd November 2023",
  },
];

export const userAtom = atom<User>({ id: 0 });

export const notebooksAtom = atom<Notebook[]>(test_notebooks);

export const selectedNotebookAtom = atom<Notebook | null>(null);

export const pagesAtom = atom<Page[]>(test_pages);

export const selectedPageAtom = atom<Page | null>(null);
