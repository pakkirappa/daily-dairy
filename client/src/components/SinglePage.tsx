import { useAtom } from "jotai";
import { selectedPageAtom } from "../store/store";
import { Page } from "../constants/types";

type PageProps = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
};

const SinglePage = (page: PageProps) => {
  const [, setSelectedPageAtom] = useAtom(selectedPageAtom);

  const handleClick = () => {
    console.log(page.id);
    setSelectedPageAtom({
      id: page.id,
      content: page.content,
      created_at: page.created_at,
      updated_at: page.updated_at,
    } as Page);
  };

  return (
    <div
      className="border-slate-500 border-b-2 border-sm p-2 bg-bg hover:bg-slate-500 hover:text-bg hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-text">{page.created_at}</div>
      <div className="text-text">{page.id}</div>
    </div>
  );
};

export default SinglePage;
