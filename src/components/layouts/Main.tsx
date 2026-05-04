import InputAdd from "../InputAdd";
import Tasks from "../Tasks";
import useTasks from "../../hooks/useTasks";
import { useState } from "react";

function Main() {
  const { tasks, error, isPading, deleteTask, setStatusTask, addTask } =
    useTasks();
  const [inputValue, setInputValue] = useState("");
  return (
    <main className="flex flex-col gap-10">
      <div>
        <InputAdd
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleAdd={() => addTask(inputValue)}
          isPading={isPading}
        />
      </div>
      <Tasks
        tasks={tasks}
        isPading={isPading}
        error={error}
        setStatusTask={setStatusTask}
        deleteTask={deleteTask}
      />
    </main>
  );
}

export default Main;
