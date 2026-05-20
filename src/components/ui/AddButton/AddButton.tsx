import { tv, type VariantProps } from "tailwind-variants";
import PlusIcon from "../../icons/PlusIcon";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const addButtonVariant = tv({
  base: `flex items-center justify-center rounded-2xl`,
  variants: {
    color: {
      primary: "bg-white",
    },
    size: {
      md: "h-8 w-8",
    },
    disable: {
      true: "pointer-events-none opacity-30",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    disable: false,
  },
});

type AddButtonProps = Omit<
  ComponentProps<"button">,
  keyof VariantProps<typeof addButtonVariant>
>
  & VariantProps<typeof addButtonVariant> & {
    iconColor?: ComponentProps<typeof PlusIcon>["color"];
    iconSize?: ComponentProps<typeof PlusIcon>["size"];
  };

function AddButton({
  disable,
  color,
  size,
  className,
  iconColor,
  iconSize,
  ...props
}: AddButtonProps) {
  return (
    <button
      className={twMerge(addButtonVariant({ color, size, disable }), className)}
      {...props}
    >
      <PlusIcon color={iconColor} size={iconSize} />
    </button>
  );
}

export default AddButton;
