import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const svgVariants = tv({
	variants: {
		color: {
			primary: "text-white",
			secondary: "text-blue-dark",
		},
		size: {
			sm: "size-4",
			md: "size-6",
		},
	},
	defaultVariants: {
		color: "primary",
		size: "md",
	},
});

type SvgProps = VariantProps<typeof svgVariants> & {
	className?: string;
	children: ReactNode;
};

function Icon({ children, className, size, color }: SvgProps) {
	return (
		<svg
			fill="currentColor"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			className={twMerge(svgVariants({ color, size }), className)}
		>
			{children}
		</svg>
	);
}

export default Icon;
