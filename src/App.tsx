import CheckIcon from "./components/icons/CheckIcon";
import PlusIcon from "./components/icons/PlusIcon";
import XIcon from "./components/icons/XIcon";
import AddButton from "./components/AddButton";
import Text from "./components/Text";
import CheckBox from "./components/CheckBox";
import InputText from "./components/InputText";
import InputAdd from "./components/InputAdd";

function App() {
	return (
		<div className=" p-2 min-h-25">
			<PlusIcon />
			<CheckIcon />
			<XIcon />
			<AddButton />
			<Text>Component texto</Text>
			<CheckBox />
			<div className="w-md">
				<InputText placeholder="Adicionar item de ação...">
					<AddButton />
				</InputText>
				<InputAdd />
			</div>
		</div>
	);
}

export default App;
