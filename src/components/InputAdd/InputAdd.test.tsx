import { describe, expect, it, vi } from "vitest";
import InputAdd from "./InputAdd";
import { render, screen, userEvent } from "../../utils/test.utils";

describe("InputAdd test", () => {
  it("check initial state", () => {
    const mockSetInput = vi.fn();
    render(
      <InputAdd
        inputValue={""}
        setInputValue={mockSetInput}
        handleAdd={() => {}}
        isPading={false}
      />,
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("");
  });

  it("check if input is working", async () => {
    const mockSetInput = vi.fn();

    const user = userEvent.setup();

    render(
      <InputAdd
        inputValue={""}
        setInputValue={mockSetInput}
        handleAdd={() => {}}
        isPading={false}
      />,
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "teste");

    expect(mockSetInput).toHaveBeenCalled();
  });

  it("call handle", async () => {
    const user = userEvent.setup();
    const mockFunctionHandle = vi.fn();

    render(
      <InputAdd
        inputValue=""
        setInputValue={() => {}}
        handleAdd={mockFunctionHandle}
        isPading={false}
      />,
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockFunctionHandle).toHaveBeenCalled();
  });
});
