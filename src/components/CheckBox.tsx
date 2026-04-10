import { type ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckIcon from "./icons/CheckIcon";

const checkBoxVariants = tv({
	base: ` rounded-sm border-2 border-gray-300 flex items-center justify-center
          peer-checked:bg-blue-600 peer-checked:border-blue-600
          peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2
          group-hover:border-blue-400`,
	variants: {
		color: {
			primary: "bg-[#c20505]",
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
		checkColor: ComponentProps<typeof CheckIcon>["color"];
		checkSize: ComponentProps<typeof CheckIcon>["size"];
	};

function CheckBox({ color, size, className, ...props }: CheckBoxProps) {
	const [completed, setCompleted] = useState<boolean>(false);

	function completedTask() {
		setCompleted((currentValue) => !currentValue);
	}

	console.log(completed);

	return (
		<label className="flex items-center gap-3 cursor-pointer group">
			<div className="relative" onClick={() => completedTask()}>
				{/* Input escondido mas funcional */}
				<input type="checkbox" className="peer sr-only" />

				{/* O "Box" customizado */}
				<div className={twMerge(checkBoxVariants({ color, size }), className)} {...props}>
					{completed === true ? <CheckIcon /> : ""}
				</div>
			</div>
		</label>
	);
}

export default CheckBox;
