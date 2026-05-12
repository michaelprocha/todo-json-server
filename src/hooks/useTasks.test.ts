import { renderHook } from "../utils/test.utils";
import useTasks from "./useTasks";
import { describe, expect, it } from "vitest";

describe("useTasks", () => {
  it("Cheking inital values", () => {
    const { result } = renderHook(() => useTasks());

    expect(result.current.tasks).toHaveLength(0);
    expect(result.current.tasksToDo).toBe(0);
  });
});
