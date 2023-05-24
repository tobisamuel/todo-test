import { TodoContext } from "@/context/todoContext";
import React, { FormEvent, useContext, useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const { addTodo } = useContext(TodoContext);

  const data = {
    id: crypto.randomUUID(),
    title: title,
    description: description,
    completed: completed,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(data);
    setTitle("");
    setDescription("");
    console.log("todo added");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow rounded-lg flex flex-col px-4 py-8"
    >
      <div className="flex-1 flex flex-col">
        <label htmlFor="title" className="font-semibold text-sm ">
          Title:
        </label>
        <input
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border mt-2 p-2 rounded-lg border-teal-400"
        />

        <label htmlFor="description" className="font-semibold text-sm mt-4">
          Description:
        </label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border mt-2 p-2 rounded-lg border-teal-400"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-teal-600 rounded-lg p-4 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
