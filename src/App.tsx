import Text from "./components/Text";
import InputAdd from "./components/InputAdd";
import Task from "./components/Task";
import useApp from "./hooks/useApp";

function App() {
  const { tasks } = useApp();
  return (
    <div className="bg-blue-background h-dvh flex flex-col items-center gap-10 justify-center">
      <header className="w-md flex justify-center">
        <Text
          as="h1"
          size="lg"
          weight="bold"
          lineHeight="lg"
          font="roboto"
          className="text-center"
        >
          Gerenciador de Produtividade
        </Text>
      </header>
      <main className="w-md">
        <div className="flex flex-col gap-10">
          <div>
            <InputAdd />
          </div>
          <div className="flex flex-col gap-3">
            {tasks.map((task, indexTask) => {
              const { id, content, completed } = task;
              return (
                <Task
                  idTask={id}
                  completed={completed}
                  key={`${content}-${indexTask}`}
                >
                  {content}
                </Task>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center">
        <Text as="p" font="inter" className="pb-4" color="secondary" size="sm">
          Itens de ação pendentes: 3
        </Text>
        <Text as="p" font="inter" color="secondary" size="sm">
          "A disciplina é a ponte entre metas e realizações."
        </Text>
        <Text as="p" font="inter" color="secondary" size="sm">
          — Jim Rohn
        </Text>
      </footer>
    </div>
  );
}

export default App;
