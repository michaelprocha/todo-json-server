import useTasks from "../../hooks/useTasks";
import Text from "../ui/Text";

function Fotter() {
  const { tasksToDo } = useTasks();
  return (
    <footer className="flex flex-col items-center">
      <Text as="p" font="inter" className="pb-4" color="secondary" size="sm">
        Itens de ação pendentes: {tasksToDo}
      </Text>
      <Text as="p" font="inter" color="secondary" size="sm">
        "A disciplina é a ponte entre metas e realizações."
      </Text>
      <Text as="p" font="inter" color="secondary" size="sm">
        — Jim Rohn
      </Text>
    </footer>
  );
}

export default Fotter;
