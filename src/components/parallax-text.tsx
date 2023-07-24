import { Component, JSXElement } from "solid-js";

type Props = {
	text?: string;
	index?: number;
	containerClassName?: string;
	class?: string;
	children?: JSXElement;
	hasPageCompletedLoading?: boolean;
};

const ParallaxText: Component<Props> = (props: Props) => {

	return (
		<>
			<div
				class={`overflow-hidden flex flex-row items-center ${props.containerClassName}`}
			>
				<div
					class={`text-white ${props.class}`}
				>
					{props.text}
					{props.children}
				</div>
			</div>
		</>
	);
};

export default ParallaxText;
