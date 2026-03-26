import { tv, type VariantProps } from "tailwind-variants";
import { type ComponentProps } from "react";

const descText = tv({
	base: `font-bold uppercase text-sm font-inter`,
	variants: {
		color: {
			primary: "text-yellow-mustard",
			secondary: "text-blue-dark",
			tertiary: "text-green-dark",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

const ball = tv({
	base: "h-2 w-2 rounded-sm",
	variants: {
		color: {
			primary: "bg-yellow-mustard",
			secondary: "bg-blue-dark",
			tertiary: "bg-green-dark",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type DesctTextProps = ComponentProps<"p"> & VariantProps<typeof descText | typeof ball>;

function DescGroupCardText({ color, children, className, ...props }: DesctTextProps) {
	return (
		<div className="flex gap-2 items-center">
			<div className={ball({ color })}></div>
			<p className={descText({ color, className })} {...props}>
				{children}
			</p>
		</div>
	);
}

export default DescGroupCardText;
