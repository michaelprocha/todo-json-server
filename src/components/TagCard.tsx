import { tv, type VariantProps } from "tailwind-variants";
import { type ComponentProps } from "react";

const tagCard = tv({
	base: "py-1 px-3 uppercase font-roboto text-xs font-semibold w-min h-min rounded-md whitespace-nowrap",
	variants: {
		color: {
			primary: "bg-yellow-light text-yellow-mustard",
			secondary: "bg-blue-light text-blue-dark",
			tertiary: "bg-green-light text-green",
			complementary: "bg-red-light text-red-dark",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type Props = VariantProps<typeof tagCard> & ComponentProps<"p">;

function TagCard({ className, color, children, ...props }: Props) {
	return (
		<p className={tagCard({ color, className })} {...props}>
			{children}
		</p>
	);
}

export default TagCard;
