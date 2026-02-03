import { api } from 'shared/lib';

import { ICreateTodo } from '../types';

export const createTodo = async (payload: ICreateTodo): Promise<string> => {
  await api.post('/todos', payload);

  return 'Todo was created';
};
