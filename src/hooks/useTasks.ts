import { useState, useEffect } from "react";
import type { Task, Error } from "../types/task.types";

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error>({
    error: false,
    errorMessage: null,
  });
  const [isPading, setIsPading] = useState<boolean>(false);

  const URL = "http://localhost:3000/tasks/";

  useEffect(() => {
    (async () => {
      setIsPading(true);
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Response status ${response.status}`);
        const responseTasks = await response.json();
        setTasks(responseTasks);
        setError({ error: false, errorMessage: null });
      } catch (error) {
        setTasks([]);
        setError({ error: true, errorMessage: "Erro ao carregar tarefas!" });
      } finally {
        setIsPading(false);
      }
    })();
  }, []);

  async function addTask(content: string) {
    setIsPading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ content, completed: false }),
      });
      if (!response.ok) throw new Error("erro ao adicionar task");
      const newTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setError({ error: false, errorMessage: null });
    } catch (error) {
      setError({ error: true, errorMessage: "Erro ao adicionar tarefa!" });
    } finally {
      setIsPading(false);
    }
  }

  async function deleteTask(id: string) {
    setIsPading(true);
    try {
      const response = await fetch(`${URL}${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao remover tarefa!");
      setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
      setError({ error: false, errorMessage: null });
    } catch (error) {
      setError({ error: true, errorMessage: "Erro ao remover tarefa!" });
    } finally {
      setIsPading(false);
    }
  }

  async function setStatusTask(id: string, status: boolean) {
    setIsPading(true);
    try {
      const response = await fetch(`${URL}${id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: status }),
      });
      if (!response.ok) throw new Error("erro ao completar/descopletar task");
      setTasks((prevTasks) =>
        prevTasks.map((item) => {
          if (item.id === id) {
            return { ...item, completed: status };
          }
          return item;
        }),
      );
      setError({ error: false, errorMessage: null });
    } catch (error) {
      setError({
        error: true,
        errorMessage: `Erro ao ${status ? "completar" : "descompletar"} tarefa!`,
      });
    } finally {
      setIsPading(false);
    }
  }

  return {
    tasks,
    error,
    isPading,
    setStatusTask,
    deleteTask,
    addTask,
  };
}
