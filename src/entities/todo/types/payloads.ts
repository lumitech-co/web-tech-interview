import { ITodo } from './responses';

export interface ICreateTodo extends Required<ITodo> {}
export interface IUpdateTodo extends Partial<Omit<ITodo, 'userId'>> {}
