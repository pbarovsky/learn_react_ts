import { FC, useState, useEffect } from "react";
import List from "./List";
import { ITodo } from "../types/types";
import { TodoItem } from "./TodoItem";
import axios from "axios";

export const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const FetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    FetchTodos();
  }, []);
  return (
    <>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </>
  );
};
