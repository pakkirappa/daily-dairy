import { Notebook } from "../constants/types";
import SingleNotebook from "../components/SingleNotebook";
import { notebooksAtom, pagesAtom, selectedNotebookAtom, selectedPageAtom } from "../store/store";
import { useAtom } from "jotai";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import SinglePage from "../components/SinglePage";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useDebounce } from "@uidotdev/usehooks";

const MAX_DELAY_IN_SAVE = 1000 * 5; // 10 seconds

const WorkArea = () => {
  // adds the given notebook to the list of notebooks
  const [notebooks, setNoteooks] = useAtom(notebooksAtom);
  const [pages] = useAtom(pagesAtom);
  const [selectedNoteBook] = useAtom(selectedNotebookAtom);
  const [selectedPage] = useAtom(selectedPageAtom);
  const [isAddNotebook, setIsAddNotebook] = useState(false);
  const [name, setName] = useState("");
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const contentChange = useDebounce(selectedPage?.content, MAX_DELAY_IN_SAVE);

  const addNotebook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNoteooks([...notebooks, { name } as Notebook]);
    setIsAddNotebook(false);
    setName("");
    toast.success("Notebook Added");
  };

  const onEditorStateChange = (
    editorState: Draft.DraftModel.ImmutableData.EditorState
  ) => {
    setEditorState(editorState);
    editorState.getCurrentContent().getPlainText();
  };

  useEffect(() => {

  }, []);

  useEffect(() => {
    console.log(contentChange, "contentchange");
  }, [contentChange]);

  return (
    <div className="flex justify-around h-screen font-poppins text-text">
      <div className="bg-primary basis-1/3">
        <div className="bg-bg w-full h-12 text-center font-bold text-3xl">
          Logo Here
        </div>
        <div className="text-center w-full">
          <button
            className="bg-bg text-text w-1/2 h-8 rounded-md my-2"
            onClick={() => setIsAddNotebook((prev) => !prev)}
          >
            {isAddNotebook ? "Cancel" : "Add Notebook"}
          </button>
          {isAddNotebook && (
            <div className="flex flex-col justify-between">
              <form className="text-center" onSubmit={(e) => addNotebook(e)}>
                <div className="text-center">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-bg text-text w-7/8 h-8 rounded-md my-2 px-2"
                    placeholder="Enter Notebook Name"
                    required
                    minLength={3}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="bg-bg text-text w-1/2 text-center h-8 rounded-md my-2"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        {notebooks.map((notebook) => (
          <SingleNotebook key={notebook.name} name={notebook.name} />
        ))}
      </div>
      <div className="bg-red-500 basis-2/3">
        <div className="h-12 bg-bg text-center text-xl font-poppins">
          NoteBook {selectedNoteBook?.name}
        </div>
        {pages.map((page) => (
          <SinglePage
            key={page.id}
            content={page.content}
            created_at={page.created_at}
            id={page.id}
            updated_at={page.updated_at}
          />
        ))}
      </div>
      <div className="bg-blue-500 basis-full">
        <Editor
          editorState={editorState}
          editorClassName="bg-bg text-text"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default WorkArea;
