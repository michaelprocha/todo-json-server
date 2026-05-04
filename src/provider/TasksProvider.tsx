import { type ReactNode, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import type { Task, Error } from "../types/task.types";

type TasksProviderProps = {
  children: ReactNode;
};

function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksToDo, setTasksToDo] = useState<number>(0);
  const [error, setError] = useState<Error>({
    error: false,
    errorMessage: null,
  });
  const [isPading, setIsPading] = useState<boolean>(false);
  return (
    <TasksContext
      value={{
        tasks,
        setTasks,
        tasksToDo,
        setTasksToDo,
        error,
        setError,
        isPading,
        setIsPading,
      }}
    >
      {children}
    </TasksContext>
  );
}

export default TasksProvider;
