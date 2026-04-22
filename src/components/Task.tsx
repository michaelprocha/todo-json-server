import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import CheckBox from "./CheckBox";
import XIcon from "./icons/XIcon";
import Text from "./Text";
import useTask from "../hooks/useTask";

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
  };

function Task({
  completed,
  idTask,
  children = "",
  background,
  className,
  ...props
}: TaskProps) {
  const { task, handleCompleted, isPading } = useTask({
    id: idTask,
    content: children,
    completed,
  });
  return (
    <div
      className={twMerge(taskVariants({ background }), className)}
      {...props}
    >
      <CheckBox
        onClick={handleCompleted}
        completed={task.completed}
        className="cursor-pointer"
      />
      <Text as="p" className="px-4 w-full" font="inter">
        {task.content}
      </Text>
      <XIcon className="cursor-pointer" />
    </div>
  );
}

export default Task;
