import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/Icon";
import Button from "./components/Button";
import Plus from "./assets/icons/add.svg?react";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Icon svg={TrashIcon} fill="#ff0202" className="h-18 w-18" />
				<div className="h-auto w-60 flex flex-col">
					<Button color="primary">
						<Icon svg={Plus} fill="#ffffff" />
						New Task
					</Button>
					<Button color="secondary">
						<Icon svg={Plus} fill="#ff0000" />
						New Task
					</Button>
					<Button color="tertiary">
						<Icon svg={Plus} fill="#fffb00" />
						New Task
					</Button>
				</div>
			</>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
