type SingleNoteBookProps = {
  id?: number;
  name: string;
};

const SingleNotebook = (notebook: SingleNoteBookProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mx-2 bg-white my-1 p-1 rounded-xl hover:cursor-pointer w-10/12">
        {notebook.name}
      </div>
      <i className="fas fa-trash-alt float-right text-xl"></i>
    </div>
  );
};

export default SingleNotebook;
