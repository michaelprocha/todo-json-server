import { act, renderHook, waitFor } from "../utils/test.utils";
import useTasks from "./useTasks";
import { expectTypeOf, describe, expect, it, vi, afterEach } from "vitest";

const MOCK_TASK = { id: "123", content: "New task", completed: false };

describe("useTasks", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Cheking inital values", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    } as Response);

    vi.stubGlobal("fetch", fetchMock);

    const { result } = renderHook(() => useTasks());

    await waitFor(() => {
      expect(result.current.tasks).toHaveLength(0);
      expect(result.current.tasksToDo).toBe(0);
    });
  });

  it("Add a new task", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => MOCK_TASK,
      } as Response);

    vi.stubGlobal("fetch", fetchMock);

    const { result } = renderHook(() => useTasks());

    await waitFor(() => expect(result.current.isPading).toBe(false));

    await act(async () => {
      await result.current.addTask("New task");
    });

    await waitFor(() => {
      expect(result.current.tasks).toHaveLength(1);
    });

    expect(result.current.tasks[0]).toMatchObject({
      content: "New task",
      completed: false,
    });
    expectTypeOf(result.current.tasks[0]).toEqualTypeOf<{
      content: string;
      completed: boolean;
      id: string;
    }>();
  });
});
