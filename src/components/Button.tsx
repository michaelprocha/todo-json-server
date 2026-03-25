import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: `
		flex 
		font-semibold 
		gap-2 
		text-base 
		rounded-lg 
		cursor-pointer 
		justify-center 
		items-center 
		leading-none
		w-full
		mx-6
		h-14
	`,
	variants: {
		color: {
			primary: "bg-blue-roayal text-white",
			secondary: "bg-white text-red-dark",
			tertiary: "bg-white text-gray",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type ButtonProps = VariantProps<typeof button> & ComponentProps<"button">;

function Button({ color, children, className, ...props }: ButtonProps) {
	return (
		<button className={button({ color, className })} {...props}>
			{children}
		</button>
	);
}

export default Button;
