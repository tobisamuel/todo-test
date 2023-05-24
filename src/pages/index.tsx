import Image from "next/image";
import { Inter } from "next/font/google";

import { useContext, useState } from "react";
import TodoItem from "@/components/TodoItem";
import TodoForm from "@/components/TodoForm";
import { TodoContext } from "@/context/todoContext";

const inter = Inter({ subsets: ["latin"] });

export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <main>
      <nav className="px-4 py-6 border-b-4">
        <span className="text-3xl font-bold">TodoList</span>
      </nav>

      <div className="min-h-[calc(100vh-84px)] px-4 py-4">
        <div>
          {/* <p className="text-4xl font-bold mt-8">Todos</p> */}

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TodoForm />

            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                id={todo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
