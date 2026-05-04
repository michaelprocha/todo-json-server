import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckIcon from "../icons/CheckIcon";

const checkBoxVariants = tv({
  base: `rounded-sm flex items-center justify-center border-4`,
  variants: {
    size: {
      md: "size-5",
    },
    disable: {
      true: "pointer-events-none opacity-30",
    },
  },
  defaultVariants: {
    size: "md",
    disable: false,
  },
});

type CheckBoxProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof checkBoxVariants>
>
  & VariantProps<typeof checkBoxVariants> & {
    checkColor?: ComponentProps<typeof CheckIcon>["color"];
    checkSize?: ComponentProps<typeof CheckIcon>["size"];
    completed: boolean;
    isPading?: boolean;
  };

function CheckBox({
  disable,
  isPading,
  size,
  className,
  checkColor,
  checkSize,
  completed,
  ...props
}: CheckBoxProps) {
  return (
    <div className="relative">
      <input type="checkbox" className="peer sr-only" />
      <div
        className={twMerge(
          checkBoxVariants({ size, disable }),
          className,
          `${completed === true ? "bg-blue border-none" : "bg-blue-dark border-blue-light"}`,
        )}
        {...props}
      >
        {isPading ?
          "L"
        : completed && <CheckIcon color={checkColor} size={checkSize} />}
      </div>
    </div>
  );
}

export default CheckBox;
