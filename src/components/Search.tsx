import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./Icon";
import SearchIcon from "../assets/icons/search.svg?react";

const search = tv({
	base: `
		bg-transparent 
		w-full 
		h-full 
		px-4 
		flex 
		items-center
		outline-none
	`,
});

type Props = ComponentProps<"input"> & VariantProps<typeof search>;

interface SearchProps extends Props {
	name: string;
	id: string;
}

function Search({ className, name, id, placeholder, ...props }: SearchProps) {
	return (
		<div className="bg-zinc-light w-80 h-12 rounded-4xl flex items-center py-2">
			<Icon svg={SearchIcon} className="pl-4 h-10 w-10" fill="#CFD1D5" />
			<input className={search({ className })} type="text" name={name} id={id} placeholder={placeholder} {...props} />
		</div>
	);
}

export default Search;
