import type { SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const plusIconVariants = tv({
    variants: {
        color: {
            blueDark: "text-blue-dark",
        },
        size: {
            md: "size-4",
        },
    },
    defaultVariants: {
        color: "blueDark",
        size: "md",
    },
});

type PlusIconProps = VariantProps<typeof plusIconVariants>
    & Omit<
        SVGProps<SVGSVGElement>,
        keyof VariantProps<typeof plusIconVariants>
    > & {
        className?: string;
    };

function PlusIcon({ color, size, className, ...props }: PlusIconProps) {
    return (
        <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(plusIconVariants({ color, size }), className)}
            {...props}
        >
            <path d="M6.275 9.425H0V6.275H6.275V0H9.425V6.275H15.7V9.425H9.425V15.7H6.275V9.425Z" />
        </svg>
    );
}

export default PlusIcon;
