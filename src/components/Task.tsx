import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckBox from "./CheckBox";
import XIcon from "./icons/XIcon";
import Text from "./Text";

const taskVariants = tv({
  base: `min-h-13 w-full flex items-center rounded-xl px-4`,
  variants: {
    background: {
      primary: "bg-blue-dark",
    },
  },
  defaultVariants: {
    background: "primary",
  },
});

type TaskProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof taskVariants> | "children"
>
  & VariantProps<typeof taskVariants> & {
    idTask: string;
    completed: boolean;
    children?: string;
    isPading: boolean;
    handleDelete: () => void;
    handleCompleted: () => void;
  };

function Task({
  isPading,
  handleCompleted,
  handleDelete,
  completed,
  idTask,
  children = "",
  background,
  className,
  ...props
}: TaskProps) {
  return (
    <div
      className={twMerge(taskVariants({ background }), className)}
      {...props}
    >
      <CheckBox
        onClick={handleCompleted}
        completed={completed}
        className="cursor-pointer"
        disable={isPading}
      />
      <Text as="p" className="px-4 w-full" font="inter">
        {children}
      </Text>
      <XIcon
        disable={isPading}
        className="cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
}

export default Task;
