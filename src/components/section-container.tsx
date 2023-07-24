import { JSXElement } from "solid-js";

type Props = {
	class?: string;
	containerClassName?: string;
	children?: JSXElement;
	id?: string;
};

const SectionContainer = (props: Props) => {
	const { class, containerClassName, children, id } = props;
	return (
		<section id={`${id}`} class={`${containerClassName}`}>
			<div class={`w-4/5 mt-0 mx-auto ${class}`}>{children}</div>
		</section>
	);
};

export default SectionContainer;
