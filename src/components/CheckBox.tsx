import { type ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckIcon from "./icons/CheckIcon";

const checkBoxVariants = tv({
	base: `rounded-sm flex items-center justify-center`,
	variants: {
		color: {
			primary: "bg-blue",
		},
		size: {
			md: "size-5",
		},
	},
	defaultVariants: {
		color: "primary",
		size: "md",
	},
});

type CheckBoxProps = Omit<ComponentProps<"input">, keyof VariantProps<typeof checkBoxVariants>> &
	VariantProps<typeof checkBoxVariants> & {
		checkColor?: ComponentProps<typeof CheckIcon>["color"];
		checkSize?: ComponentProps<typeof CheckIcon>["size"];
	};

function CheckBox({ color, size, className, checkColor, checkSize, ...props }: CheckBoxProps) {
	const [completed, setCompleted] = useState<boolean>(false);

	function completedTask() {
		setCompleted((currentValue) => !currentValue);
	}

	return (
		<div className="relative" onClick={() => completedTask()}>
			<input type="checkbox" className="peer sr-only" />
			<div className={twMerge(checkBoxVariants({ color, size }), className)} {...props}>
				{completed && <CheckIcon color={checkColor} size={checkSize} />}
			</div>
		</div>
	);
}

export default CheckBox;
