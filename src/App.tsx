import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/Icon";
import Button from "./components/Button";
import Plus from "./assets/icons/add.svg?react";
import Search from "./components/Search";
import Amount from "./components/Amount";
import DescGroupCardText from "./components/DescGroupCardText";
import DescGroup from "./components/DescGroup";
import TagCard from "./components/TagCard";
import Link from "./components/Link";
import Card from "./components/Card";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<p>icon</p>
				<Icon svg={TrashIcon} fill="#ff0202" className="h-18 w-18" />
				<div className="h-auto w-60 flex flex-col">
					Buttons
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
				<div>
					search
					<Search name="search" id="123" color="primary" placeholder="Search tasks..." />
				</div>
				<div className="h-30 w-30">
					amount
					<Amount>5</Amount>
					<Amount color="secondary">3</Amount>
					<Amount color="tertiary">4</Amount>
				</div>
				<div>
					<DescGroupCardText>todo</DescGroupCardText>
					<DescGroupCardText color="secondary">in progress</DescGroupCardText>
					<DescGroupCardText color="tertiary">done</DescGroupCardText>
				</div>
				<div className="w-50">
					<DescGroup color="primary" numbers="5">
						todo
					</DescGroup>
					<DescGroup color="secondary" numbers="3">
						in progress
					</DescGroup>
					<DescGroup color="tertiary" numbers="1">
						done
					</DescGroup>
				</div>
				<div className="flex flex-col gap-4 p-4">
					<TagCard>todo</TagCard>
					<TagCard color="secondary">in progress</TagCard>
					<TagCard color="tertiary">done</TagCard>
					<TagCard color="complementary">expired</TagCard>
				</div>
				<Link color="primary" svg={TrashIcon}>
					teste
				</Link>
				<Link color="secondary" svg={TrashIcon}>
					teste
				</Link>
				<Link color="tertiary" svg={TrashIcon}>
					teste
				</Link>
				<div className="p-8">
					<Card
						tags={["todo", "expired"]}
						title="teste"
						content="teste-content"
						createdAt="2025-12-01"
						deadline="2025-12-10"
						responsable="Michael Rocha"
					></Card>
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
