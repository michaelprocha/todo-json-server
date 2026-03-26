import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const amount = tv({
	base: "rounded-full w-4 h-4 font-semibold text-sm flex items-center justify-center",
	variants: {
		color: {
			primary: `text-yellow-mustard bg-yellow-light`,
			secondary: `text-blue-dark bg-blue-light`,
			tertiary: `text-green-dark bg-green-light`,
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type AmountProps = ComponentProps<"p"> & VariantProps<typeof amount>;

function Amount({ color, className, children, ...props }: AmountProps) {
	return (
		<p className={amount({ color, className })} {...props}>
			{children}
		</p>
	);
}

export default Amount;
