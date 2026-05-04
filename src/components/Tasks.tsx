import Task from "./Task";
import Text from "./ui/Text";
import SpinIcon from "./icons/SpinIcon";
import type { Task as ITask, Error } from "../types/task.types";

type TasksProps = {
  tasks: ITask[];
  error: Error;
  isPading: boolean;
  deleteTask: (id: string) => void;
  setStatusTask: (id: string, completed: boolean) => void;
};

function Tasks({
  tasks,
  error,
  isPading,
  deleteTask,
  setStatusTask,
}: TasksProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${error.error || isPading ? "pb-0" : "pb-15"}`}
    >
      {tasks.map((task, indexTask) => {
        const { id, content, completed } = task;
        return (
          <Task
            isPading={isPading}
            idTask={id}
            completed={completed}
            key={`${content}-${indexTask}`}
            handleDelete={() => deleteTask(id)}
            handleCompleted={() => setStatusTask(id, !completed)}
          >
            {content}
          </Task>
        );
      })}
      {error.error && !isPading ?
        <div className="bg-trasparent flex items-center justify-center h-12">
          <Text size={"base"} className="text-error" weight="bold" font="inter">
            {error.errorMessage}
          </Text>
        </div>
      : ""}
      {isPading ?
        <div className="bg-trasparent flex gap-2 items-center justify-center h-12">
          <SpinIcon />
          <Text size={"base"} color="primary" weight="bold" font="inter">
            {"Carregando..."}
          </Text>
        </div>
      : ""}
    </div>
  );
}

export default Tasks;
