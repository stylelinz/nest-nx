export type Todo = {
  message: string;
  done: boolean;
};

export const shareTodos = (): Todo[] => {
  return [
    { message: 'survey nx', done: false },
    { message: 'production update', done: false },
  ];
};

export const createShareTodos = (...args: (Todo | Todo[])[]): Todo[] => {
  const result: Todo[] = [];
  for (const todo of args) {
    if (Array.isArray(todo)) {
      result.push(...todo);
    } else {
      result.push(todo);
    }
  }
  return result;
};
