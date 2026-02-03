import { FC } from 'react';

import { ITodo, useUpdateTodo } from 'entities';

import { cn } from 'shared/lib';

interface IProps {
  todo: ITodo;
}

export const Todo: FC<IProps> = ({ todo }) => {
  const { mutate: updateTodo, isPending } = useUpdateTodo();

  const handleToggleCompletion = () => {
    updateTodo({ todoId: todo.id.toString(), completed: !todo.completed });
  };

  return (
    <li
      key={todo.id}
      className={cn(
        'flex cursor-pointer gap-2 first-letter:uppercase',
        todo.completed && 'line-through',
        isPending && 'cursor-progress',
      )}
    >
      <input
        type="checkbox"
        disabled={isPending}
        onChange={handleToggleCompletion}
        checked={todo.completed}
      />
      {todo.title}
    </li>
  );
};
