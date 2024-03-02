import { useEffect, useState } from 'react';
import { getAllTodos } from './todo.data';
import { Todo } from './todo.type';

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodos()
      .then((data: Todo[]) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);
  return {
    todos,
  };
};
