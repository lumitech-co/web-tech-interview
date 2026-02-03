import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { QueryKeys } from 'shared/constants';

import { getTodo, getTodos } from '../api';
import { IGetTodosParams } from '../types';

export const useGetTodos = (query: IGetTodosParams) => {
  return useQuery({
    queryKey: [QueryKeys.GET_TODOS, query],
    queryFn: ({ signal }) => getTodos(query, signal),
  });
};

export const useGetTodosInfiniteScroll = (query: IGetTodosParams) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QueryKeys.GET_INFINITE_TODOS, query],
    queryFn: ({ pageParam }) => getTodos({ ...query, _page: pageParam }),
    getNextPageParam: lastPage => lastPage.nextPage,
  });
};

export const useGetTodo = (todoId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_TODOS, todoId],
    queryFn: ({ signal }) => getTodo(todoId, signal),
  });
};
