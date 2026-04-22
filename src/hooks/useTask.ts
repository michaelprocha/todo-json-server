import { startTransition, useActionState } from "react";

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface Payload {
  type: string;
}

async function taskAction(task: Task, actionPayload: Payload) {
  const { type } = actionPayload;
  const { id, completed } = task;
  switch (type) {
    case "COMPLETED":
      try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ completed: !completed }),
        });
        if (!response.ok) throw new Error("erro em atualizar");
        const newTaskString = await response.json();
        console.log(newTaskString);
        const newTask = JSON.parse(newTaskString);
        console.log(newTask);
        return newTask;
      } catch (error) {
        console.log("error");
      }
      break;

    case "REMOVE":
      break;
  }
  return task;
}

export default function useTask(currentTask: Task) {
  const [task, dispatchAction, isPading] = useActionState<Task, Payload>(
    taskAction,
    currentTask,
  );

  function handleCompleted() {
    startTransition(() => {
      dispatchAction({ type: "COMPLETED" });
    });
  }

  return { task, isPading, handleCompleted };
}
