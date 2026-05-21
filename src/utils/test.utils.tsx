// test-utils.ts
import { renderHook, type RenderHookOptions } from "@testing-library/react";
import TasksProvider from "../provider/TasksProvider";
import type { ReactNode } from "react";

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <TasksProvider>{children}</TasksProvider>
);

const customRenderHook = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
) => {
  return renderHook(hook, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export * from "@testing-library/jest-dom/vitest";
export { customRenderHook as renderHook };
