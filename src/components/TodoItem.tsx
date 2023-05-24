import { Todo } from "@/pages";
import { useContext, useState } from "react";
import TodoEditForm from "./TodoEditForm";
import { TodoContext } from "@/context/todoContext";

const TodoItem = ({ id, title, description, completed }: Todo) => {
  const [formOpen, setFormOpen] = useState(false);
  const { deleteTodo } = useContext(TodoContext);

  if (formOpen)
    return (
      <TodoEditForm
        id={id}
        completed={completed}
        title={title}
        description={description}
        formOpen={formOpen}
        setFormOpen={setFormOpen}
      />
    );

  return (
    <div className="shadow rounded-lg flex flex-col px-4 py-8">
      <div className="flex-1">
        <p className="font-semibold text-xl">{title}</p>
        <p className="font-semibold text-sm mt-4">{description}</p>
        <p className="font-semibold text-sm mt-4">
          Completed: {completed ? "Yes" : "No"}
        </p>
      </div>

      <div className="mt-4 w-full flex gap-4">
        <button
          type="submit"
          className="w-full bg-teal-600 rounded-lg p-4 text-white"
          onClick={() => {
            deleteTodo(id);
            console.log("delete");
          }}
        >
          Delete
        </button>
        <button
          type="submit"
          className="w-full bg-teal-600 rounded-lg p-4 text-white"
          onClick={() => setFormOpen(true)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
