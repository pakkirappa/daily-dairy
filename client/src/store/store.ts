import { atom } from "jotai";
import { User } from "../constants/types";


export const userAtom = atom<User>({ id: 0 });
