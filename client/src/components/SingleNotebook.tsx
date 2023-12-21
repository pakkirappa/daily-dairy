import { selectedNotebookAtom, pagesAtom } from "../store/store";
import { useAtom } from "jotai";
import { Notebook } from "../constants/types";

type SingleNoteBookProps = {
  id?: number;
  name: string;
};

const SingleNotebook = (notebook: SingleNoteBookProps) => {
  const [, setSelectedNotebook] = useAtom(selectedNotebookAtom);
  const [pages, setPages] = useAtom(pagesAtom);

  const handleClick = () => {
    setSelectedNotebook({
      id: notebook.id,
      name: notebook.name,
    } as Notebook);

    const filteredPages = pages.filter(
      (page) => page.notebook_id === notebook.id
    );
    setPages([...filteredPages]);
  };

  return (
    <div className="flex flex-row justify-between">
      <div
        className="mx-2 bg-white my-1 px-3 py-1 rounded-md hover:cursor-pointer w-full"
        onClick={handleClick}
      >
        {notebook.name}
      </div>
    </div>
  );
};

export default SingleNotebook;
