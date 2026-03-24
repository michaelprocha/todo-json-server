import type { FC, SVGProps } from "react";

// Definimos o tipo das props: aceita um "SvgComponent" e as props normais de SVG
interface IconProps extends SVGProps<SVGSVGElement> {
	// Aqui você usa a assinatura de um componente React que renderiza SVG
	component: FC<SVGProps<SVGSVGElement>>;
	fill: string;
	className: string;
}

const Icon = ({ component: SvgComponent, fill = "#000000", className, ...props }: IconProps) => {
	return (
		<SvgComponent
			fill={fill}
			// O 'fill="currentColor"' permite que o ícone herde a cor do texto do elemento pai
			className={className}
			{...props}
		/>
	);
};

export default Icon;
