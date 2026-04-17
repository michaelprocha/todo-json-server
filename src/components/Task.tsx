import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckBox from "./CheckBox";
import XIcon from "./icons/XIcon";
import Text from "./Text";

const taskVariants = tv({
	base: `min-h-13 w-full flex items-center rounded-xl px-4`,
	variants: {
		background: {
			primary: "bg-blue-dark",
		},
	},
	defaultVariants: {
		background: "primary",
	},
});

type TaskProps = Omit<ComponentProps<"div">, keyof VariantProps<typeof taskVariants>> & VariantProps<typeof taskVariants>;

function Task({ children, background, className, ...props }: TaskProps) {
	return (
		<div className={twMerge(taskVariants({ background }), className)} {...props}>
			<CheckBox className="cursor-pointer" />
			<Text as="p" className="px-4 w-full" font="inter">
				{children}
			</Text>
			<XIcon className="cursor-pointer" />
		</div>
	);
}

export default Task;
