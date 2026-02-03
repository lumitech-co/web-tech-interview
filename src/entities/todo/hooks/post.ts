import { useMutation } from '@tanstack/react-query';

import { QueryKeys } from 'shared/constants';
import { queryClient } from 'shared/lib';

import { createTodo } from '../api';
import { ICreateTodo } from '../types';

export const useCreateTodo = () => {
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
    mutationFn: (payload: ICreateTodo) => createTodo(payload),
  });
};
