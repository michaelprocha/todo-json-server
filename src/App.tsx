import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TrashIcon from "./assets/icons/trash.svg?react";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<TrashIcon />
				<div className="text-teste">Hello World</div>
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
