import { useEffect, useState } from "react";

export default function useApp() {
  const [tasks, setTaks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        if (!response.ok) throw new Error(`Response status ${response.status}`);
        const responseTasks = await response.json();
        setTaks(responseTasks);
      } catch (error) {
        console.log(error);
        setTaks([]);
      }
    })();
  }, []);

  return { tasks };
}
