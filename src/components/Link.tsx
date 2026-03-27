import { tv, type VariantProps } from "tailwind-variants";
import { type ComponentProps, type SVGProps, type FC } from "react";
import Icon from "./Icon";

const linkProps = tv({
	base: "font-roboto text-lg flex gap-4 py-2 px-4 items-center cursor-pointer",
	variants: {
		color: {
			primary: "text-midnight",
			secondary: "text-blue-dark",
			tertiary: "text-gray",
		},
	},
	defaultVariants: {
		color: "tertiary",
	},
});

type Props = VariantProps<typeof linkProps> & ComponentProps<"div">;

interface LinkProps extends Props {
	svg: FC<SVGProps<SVGSVGElement>>;
}

function Link({ className, color, children, svg, ...props }: LinkProps) {
	return (
		<div className={linkProps({ color, className })} {...props}>
			<Icon svg={svg} fill={color === "primary" ? "#111827" : color === "secondary" ? "#1D4ED8" : "#3E434B"} />
			{children}
		</div>
	);
}

export default Link;
