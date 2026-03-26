import Amount from "./Amount";
import DescGroupCardText from "./DescGroupCardText";
import { tv } from "tailwind-variants";

const descGroup = tv({
	base: `flex items-center justify-between`,
});

type DescGroupProps = {
	color: "primary" | "secondary" | "tertiary" | undefined;
	children: string;
	numbers: string;
	className?: string;
};

function DescGroup({ color, numbers, children, className }: DescGroupProps) {
	return (
		<div className={descGroup({ className })}>
			<DescGroupCardText color={color}>{children}</DescGroupCardText>
			<Amount color={color}>{numbers}</Amount>
		</div>
	);
}

export default DescGroup;
