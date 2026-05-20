import { describe, it, expect, vi } from "vitest";
import AddButton from "./AddButton";
import { render, screen, userEvent } from "../../../utils/test.utils";

describe("component ui AddButton.tsx", () => {
  it("onClick", async () => {
    const callFunction = vi.fn();

    const user = userEvent.setup();

    render(<AddButton onClick={callFunction} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(callFunction).toHaveBeenCalledTimes(1);
  });
});
