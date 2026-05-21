import { describe, it, expect, vi } from "vitest";
import AddButton from "./AddButton";
import { render, screen, userEvent } from "../../../utils/test.utils";

describe("component ui AddButton.tsx", () => {
  it("Check if a function was called", async () => {
    const callFunction = vi.fn();

    const user = userEvent.setup();

    render(<AddButton onClick={callFunction} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(callFunction).toHaveBeenCalledTimes(1);
  });

  it("Check if button is disabled", async () => {
    const user = userEvent.setup();

    const callFunction = vi.fn();

    render(<AddButton onClick={callFunction} disable={true} />);

    const button = screen.getByRole("button");

    user.click(button);

    await user.click(button);

    expect(callFunction).not.toHaveBeenCalled();

    expect(button).toBeDisabled();
  });
});
