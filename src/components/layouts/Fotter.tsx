import Text from "../Text";

type Props = {};

function Fotter({}: Props) {
  return (
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
  );
}

export default Fotter;
