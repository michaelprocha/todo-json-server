import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: "flex font-semibold px-4 py-3 gap-2 text-base",
	variants: {
		color: {
			primary: "bg-blue-roayal text-white",
			secundary: "bg-white text-red-dark",
			tertiary: "bg-white text-gray",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});
