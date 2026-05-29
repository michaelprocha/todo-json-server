import AddButton from "../ui/AddButton/AddButton";
import InputText from "../ui/InputText";
import { type ComponentProps, type Dispatch } from "react";

type InputAddProps = Omit<ComponentProps<"input">, "height" | "color"> & {
  inputColor?: ComponentProps<typeof InputText>["color"];
  inputBackground?: ComponentProps<typeof InputText>["background"];
  inputHeight?: ComponentProps<typeof InputText>["height"];
  iconSize?: ComponentProps<typeof AddButton>["iconSize"];
  iconColor?: ComponentProps<typeof AddButton>["iconColor"];
  addClassName?: ComponentProps<typeof AddButton>["className"];
  addColor?: ComponentProps<typeof AddButton>["color"];
  addSize?: ComponentProps<typeof AddButton>["size"];
  handleAdd: () => void;
  setInputValue: Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  isPading: boolean;
};

function InputAdd({
  isPading,
  inputValue,
  setInputValue,
  handleAdd,
  placeholder = "Adicionar item de ação...",
  iconSize,
  iconColor,
  addClassName,
  addColor,
  addSize,
  inputColor,
  inputBackground,
  inputHeight,
  className,
  id,
  name,
  ...props
}: InputAddProps) {
  return (
    <InputText
      placeholder={placeholder}
      id={id}
      name={name}
      color={inputColor}
      height={inputHeight}
      background={inputBackground}
      className={className}
      value={inputValue}
      setInput={setInputValue}
      {...props}
    >
      <AddButton
        color={addColor}
        size={addSize}
        iconSize={iconSize}
        iconColor={iconColor}
        className={addClassName}
        onClick={() => {
          handleAdd();
          setInputValue("");
        }}
        disable={isPading}
      />
    </InputText>
  );
}

export default InputAdd;
