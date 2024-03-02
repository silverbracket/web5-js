import { Todo } from './todo.type';
import { useTodo } from './todo.hooks';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;
  const handleEdit = () => {};
  const handleDelete = () => {};
  return <div>{todo.description}</div>;
};

export const TodoList = () => {
  const { todos, createTodo } = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
      <button onClick={createTodo}>create todo</button>
    </div>
  );
};
