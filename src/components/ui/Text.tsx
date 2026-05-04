import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TypeText =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "blockquote"
    | "pre"
    | "span"
    | "strong"
    | "em"
    | "b"
    | "i"
    | "small"
    | "mark"
    | "abbr"
    | "code"
    | "time"
    | "label"
    | "sub"
    | "sup"
    | "del"
    | "ins";

const textVariants = tv({
    variants: {
        color: {
            primary: "text-white",
            secondary: "text-grey",
        },
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-4xl",
        },
        font: {
            roboto: "font-roboto",
            inter: "font-inter",
        },
        weight: {
            regular: "font-regular",
            bold: "font-bold",
        },
        lineHeight: {
            sm: "leading-5",
            medium: "leading-6",
            lg: "leading-10",
        },
        letterSpacing: {
            normal: "tracking-normal",
            widest: "-tracking-widest",
        },
    },
    defaultVariants: {
        color: "primary",
        size: "base",
        font: "inter",
        weight: "regular",
        lineHeight: "medium",
        letterSpacing: "normal",
    },
});

type TextProps<T extends TypeText> = VariantProps<typeof textVariants> & {
    as?: T;
    children: ReactNode;
} & Omit<
        ComponentPropsWithoutRef<T>,
        keyof VariantProps<typeof textVariants> | "as"
    >;

function Text<T extends TypeText = "span">({
    as,
    color,
    size,
    font,
    weight,
    lineHeight,
    letterSpacing,
    className,
    children,
    ...props
}: TextProps<T>) {
    const Text = (as || "span") as ElementType;
    return (
        <Text
            className={twMerge(
                textVariants({
                    color,
                    size,
                    font,
                    weight,
                    lineHeight,
                    letterSpacing,
                    className,
                }),
            )}
            {...props}
        >
            {children}
        </Text>
    );
}

export default Text;
