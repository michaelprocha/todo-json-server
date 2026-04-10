import CheckIcon from "./components/icons/CheckIcon";
import PlusIcon from "./components/icons/PlusIcon";
import XIcon from "./components/icons/XIcon";
import AddButton from "./components/AddButton";
import Text from "./components/Text";
import CheckBox from "./components/CheckBox";

function App() {
	return (
		<div className="bg-blue-light p-2 min-h-25">
			<PlusIcon />
			<CheckIcon />
			<XIcon />
			<AddButton />
			<Text>Component texto</Text>
			<CheckBox />
		</div>
	);
}

export default App;
