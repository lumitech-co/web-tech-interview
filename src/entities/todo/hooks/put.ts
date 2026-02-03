import { useMutation } from '@tanstack/react-query';

import { QueryKeys } from 'shared/constants';
import { queryClient } from 'shared/lib';

import { updateTodo } from '../api';
import { IUpdateTodo } from '../types';

export const useUpdateTodo = () => {
  return useMutation({
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_TODOS],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_INFINITE_TODOS],
      });
    },
    onError(error) {
      console.error(error);
    },
    mutationFn: ({
      todoId,
      ...payload
    }: IUpdateTodo & {
      todoId: string;
    }) => updateTodo(todoId, payload),
  });
};
