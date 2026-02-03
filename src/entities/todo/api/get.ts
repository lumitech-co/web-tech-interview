import { api } from 'shared/lib';

import { IGetTodosParams, ITodo } from '../types';

export const getTodo = async (
  todoId: string,
  signal?: AbortSignal,
): Promise<ITodo> => {
  const response = await api.get(`/todos/${todoId}`, {
    signal,
  });

  return response.data;
};

export const getTodos = async (
  params: IGetTodosParams,
  signal?: AbortSignal,
): Promise<{ todos: ITodo[]; nextPage: number | null }> => {
  const response = await api.get('/todos', {
    signal,
    params,
  });

  // eslint-disable-next-line no-underscore-dangle
  const nextPage = params._page + 1;
  const nextPageData = await api.get('/todos', {
    signal,
    params: {
      ...params,
      _page: nextPage,
    },
  });

  return { todos: response.data, nextPage: nextPageData ? nextPage : null };
};
