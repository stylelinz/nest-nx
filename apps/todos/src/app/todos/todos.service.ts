import { Injectable } from '@nestjs/common';
import { createShareTodos, shareTodos, Todo } from '@nest-nx/data';

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
];

@Injectable()
export class TodosService {
  getTodos(): Todo[] {
    return todos.concat(shareTodos());
  }
  createTodos(tasks: string[]): Todo[] {
    const newTodos: Todo[] = tasks.map((task) => ({
      message: task,
      done: false,
    }));
    return createShareTodos(newTodos);
  }
}
