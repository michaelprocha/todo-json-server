import AddButton from "./AddButton";
import InputText from "./InputText";
import type { ComponentProps } from "react";

type InputAddProps = Omit<ComponentProps<"input">, "height" | "color"> & {
	inputColor?: ComponentProps<typeof InputText>["color"];
	inputBackground?: ComponentProps<typeof InputText>["background"];
	inputHeight?: ComponentProps<typeof InputText>["height"];
	iconSize?: ComponentProps<typeof AddButton>["iconSize"];
	iconColor?: ComponentProps<typeof AddButton>["iconColor"];
	addClassName?: ComponentProps<typeof AddButton>["className"];
	addColor?: ComponentProps<typeof AddButton>["color"];
	addSize?: ComponentProps<typeof AddButton>["size"];
};

function InputAdd({
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
			{...props}
		>
			<AddButton color={addColor} size={addSize} iconSize={iconSize} iconColor={iconColor} className={addClassName} />
		</InputText>
	);
}

export default InputAdd;
