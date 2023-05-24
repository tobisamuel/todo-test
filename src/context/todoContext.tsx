import { Todo } from "@/pages";
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export type TodoContextType = {
  todos: Todo[];
  addTodo: (data: Todo) => void;
  editTodo: (id: string, data: Todo) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      setTodos(JSON.parse(todos));
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  const addTodo = (data: Todo) => {
    if (!data.title || !data.description) return;

    const newTodos = [...todos, data];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id: string, data: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return data;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
