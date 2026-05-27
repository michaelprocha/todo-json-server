import { describe, it, expect } from "vitest";
import { render, screen, userEvent } from "../../../utils/test.utils";
import CheckBox from "./CheckBox";

describe("Component ui CheckBox.tsx", () => {
  it("Check inital state", () => {
    render(<CheckBox completed={false} />);

    const checkButton = screen.getByRole("checkbox");

    expect(checkButton).not.toBeChecked();
  });

  it("Check checked", async () => {
    const user = userEvent.setup();

    let mockCompleted = false;

    function changeCheck() {
      mockCompleted = true;
    }
    render(<CheckBox completed={mockCompleted} onClick={changeCheck} />);

    const checkButton = screen.getByRole("checkbox");

    await user.click(checkButton);

    expect(checkButton).toBeChecked();
  });
});
