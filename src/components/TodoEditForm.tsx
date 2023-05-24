import { TodoContext } from "@/context/todoContext";
import { Todo } from "@/pages";
import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";

type FormState = {
  formOpen: boolean;
  setFormOpen: Dispatch<SetStateAction<boolean>>;
};

const TodoEditForm = ({
  id,
  description,
  title,
  completed,
  setFormOpen,
}: Todo & FormState) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCompleted, setNewCompleted] = useState(completed);

  const { editTodo } = useContext(TodoContext);

  const data = {
    id: id,
    title: newTitle,
    description: newDescription,
    completed: newCompleted,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editTodo(id, data);
    console.log("todo edited");
    setFormOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow rounded-lg flex flex-col px-4 py-8"
    >
      <label htmlFor="title" className="font-semibold text-sm ">
        Title:
      </label>
      <input
        name="title"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        className="border mt-2 p-2 rounded-lg border-teal-400"
      />

      <label htmlFor="description" className="font-semibold text-sm mt-4">
        Description:
      </label>
      <textarea
        name="description"
        value={newDescription}
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        className="border mt-2 p-2 rounded-lg border-teal-400"
      />

      <div className="mt-4 flex items-center gap-2">
        <label htmlFor="completed" className="font-semibold text-sm">
          Completed:
        </label>
        <input
          type="checkbox"
          name="completed"
          id=""
          checked={newCompleted}
          onChange={() => {
            setNewCompleted(!newCompleted);
          }}
        />
      </div>

      <div className="flex gap-4">
        <button
          className="w-full mt-4 bg-teal-600 rounded-lg p-4 text-white"
          onClick={() => setFormOpen(false)}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full mt-4 bg-teal-600 rounded-lg p-4 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoEditForm;
