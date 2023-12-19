import { atom } from "jotai";

type UserStore = {
  id: string;
};

export const userAtom = atom<UserStore>({ id: "" });
