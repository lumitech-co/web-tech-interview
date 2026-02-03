import { api } from 'shared/lib';

import { IUpdateTodo } from '../types';

export const updateTodo = async (
  todoId: string,
  payload: Partial<IUpdateTodo>,
): Promise<string> => {
  await api.put(`/todos/${todoId}`, payload);

  return 'Todo was updated';
};
