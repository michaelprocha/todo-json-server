import { createContext, type Dispatch } from "react";
import type { Task, Error } from "../types/task.types";

type TasksContextType = {
  tasks: Task[];
  setTasks: Dispatch<React.SetStateAction<Task[]>>;
  tasksToDo: number;
  setTasksToDo: Dispatch<React.SetStateAction<number>>;
  error: Error;
  setError: Dispatch<React.SetStateAction<Error>>;
  isPading: boolean;
  setIsPading: Dispatch<React.SetStateAction<boolean>>;
};

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined,
);
