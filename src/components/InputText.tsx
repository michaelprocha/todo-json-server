import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const inputTextVariant = tv({
	base: `flex justify-between rounded-full items-center`,
	variants: {
		background: {
			primary: "bg-blue-dark",
		},
		color: {
			primary: "text-white",
		},
		height: {
			md: "h-12.5",
		},
	},
	defaultVariants: {
		background: "primary",
		color: "primary",
		height: "md",
	},
});

type InputTextProps = Omit<ComponentProps<"input">, keyof VariantProps<typeof inputTextVariant>> &
	VariantProps<typeof inputTextVariant>;

function InputText({ placeholder, className, color, height, background, children, id, name, ...props }: InputTextProps) {
	return (
		<div className={twMerge(inputTextVariant({ background, height }), className, `${children ? "pr-2" : ""}`)}>
			<input
				type="text"
				placeholder={placeholder}
				className={twMerge(inputTextVariant({ color }), `outline-0 w-full font-inter h-full ${children ? "pl-6" : "px-6"}`)}
				name={name}
				id={id}
				{...props}
			/>
			{children}
		</div>
	);
}

export default InputText;
