import { useState } from "react";
import { Notebook } from "../constants/types";
import SingleNotebook from "../components/SingleNotebook";

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

const WorkArea = () => {
  // const [notebooks, setNoteooks] = useState<Notebook[]>([]);
  const [notebooks, setNoteooks] = useState<Notebook[]>(test_notebooks);

  // adds the given notebook to the list of notebooks
  const addNotebook = (notebook: Notebook) => {
    setNoteooks([...notebooks, notebook]);
  };

  return (
    <div className="flex flex- justify-around h-screen font-poppins text-text">
      <div className="bg-primary w-1/3">
        <div className="bg-bg w-full h-12 text-center font-bold text-3xl">
          Logo Here
        </div>
        <div className="text-center w-full">Notebooks</div>
        {notebooks.map((notebook) => (
          <SingleNotebook key={notebook.name} name={notebook.name} />
        ))}
      </div>
      <div className="bg-red-500 w-2/3">Pages</div>
      <div className="bg-blue-500 w-full"></div>
    </div>
  );
};

export default WorkArea;
