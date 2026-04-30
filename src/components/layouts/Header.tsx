import Text from "../Text";

type Props = {};

function Header({}: Props) {
  return (
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
  );
}

export default Header;
