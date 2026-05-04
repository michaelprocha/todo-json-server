import { useEffect } from "react";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export default function useTasks() {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) {
    throw new Error("useTasks deve ser usado dentro de um TasksProvider");
  }

  const {
    tasks,
    setTasks,
    tasksToDo,
    setTasksToDo,
    error,
    setError,
    isPading,
    setIsPading,
  } = tasksContext;

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

  useEffect(() => {
    function updateTasksToDo() {
      setTasksToDo(tasks.filter((item) => item.completed === false).length);
    }
    updateTasksToDo();
  }, [tasks]);

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
    tasksToDo,
    error,
    isPading,
    setStatusTask,
    deleteTask,
    addTask,
  };
}
