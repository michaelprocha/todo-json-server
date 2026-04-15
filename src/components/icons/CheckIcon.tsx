import type { SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const checkIconVariants = tv({
	variants: {
		color: {
			white: "text-white",
		},
		size: {
			sm: "size-3",
		},
	},
	defaultVariants: {
		color: "white",
		size: "sm",
	},
});

type CheckIconProps = VariantProps<typeof checkIconVariants> &
	Omit<SVGProps<SVGSVGElement>, keyof VariantProps<typeof checkIconVariants>> & {
		className?: string;
	};

function CheckIcon({ color, size, className, ...props }: CheckIconProps) {
	return (
		<svg
			viewBox="0 0 9 7"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge(checkIconVariants({ color, size }), className)}
			{...props}
		>
			<path d="M2.85 6.0125L0 3.1625L0.7125 2.45L2.85 4.5875L7.4375 0L8.15 0.7125L2.85 6.0125Z" />
		</svg>
	);
}

export default CheckIcon;
