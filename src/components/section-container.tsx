import { JSXElement } from "solid-js";

interface Props {
	class?: string;
	containerClassName?: string;
	children?: JSXElement;
	id?: string;
};

const SectionContainer = (props: Props) => {
	return (
		<section id={`${props.id}`} class={`${props.containerClassName}`}>
			<div class={`w-4/5 mt-0 mx-auto ${props.class}`}>{props.children}</div>
		</section>
	);
};

export default SectionContainer;
