export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const getTodo = async (id: number): Promise<Todo> => {
  const todo = await fetch(`https://dummyjson.com/todos/${id}`);
  return todo.json();
};

export const getTodoWithRevalidation = async (id: number): Promise<Todo> => {
  const todo = await fetch(`https://dummyjson.com/todos/${id}`, {
    next: { revalidate: 15 },
  });
  return todo.json();
};

export const getTodoWithoutCache = async (id: number): Promise<Todo> => {
  const todo = await fetch(`https://dummyjson.com/todos/${id}`, {
    cache: "no-store",
  });
  return todo.json();
};
