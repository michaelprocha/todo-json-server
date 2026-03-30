import TagCard from "./TagCard";
import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const card = tv({
	base: "h-77 w-73 rounded-2xl pl-1",
	variants: {
		color: {
			primary: "bg-yellow-mustard",
			secondary: "bg-blue-dark",
			tertiary: "bg-green",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type Tag = "todo" | "in progress" | "done" | "expired";

type CardProps = VariantProps<typeof card> &
	ComponentProps<"div"> & {
		tags: Tag[];
		title: string;
		content: string;
		createdAt: string;
		deadline: string;
		finalize?: string;
		responsable: string;
	};

function Card({ color, className, tags, title, content, createdAt, deadline, finalize, responsable, ...props }: CardProps) {
	return (
		<div className={card({ color, className })} {...props}>
			<div className={`bg-white-light p-4 h-full rounded-r-2xl`}>
				<div className="flex gap-3 mb-2">
					{tags.map((tag) => (
						<TagCard
							color={`${tag === "todo" ? "primary" : tag === "in progress" ? "secondary" : tag === "done" ? "tertiary" : "complementary"}`}
						>
							{tag}
						</TagCard>
					))}
				</div>
				<h2 className="text-xl font-semibold font-roboto text-midnight mb-4">{title}</h2>
				<p className="font-inter text-lg text-gray mb-2">{content}</p>
				<div className="flex flex-col gap-2 mt-10">
					<p className="text-base text-zinc font-inter flex justify-between">
						<span>Criando em:</span>
						{createdAt}
					</p>
					<p className="text-base text-zinc font-inter flex justify-between">
						<span>Prazo:</span>
						{deadline}
					</p>
					<p className="text-base text-zinc font-inter flex justify-between">
						<span>Responsavel:</span>
						{responsable}
					</p>
					{finalize ? (
						<p className="text-base text-zinc font-inter flex justify-between">
							<span>Finalizado:</span>
							{finalize}
						</p>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
