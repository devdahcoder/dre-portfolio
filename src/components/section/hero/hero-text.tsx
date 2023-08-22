import { Component, JSXElement } from "solid-js";

interface Props {
	text?: string;
	index?: number;
	children?: JSXElement;
	hasPageCompletedLoading?: boolean;
}

const HeroText: Component<Props> = (props: Props) => {
	return (
		<>
			<div class={`hero--text`}>
				<div class={`text-white`}>
					{props.text}
					{props.children}
				</div>
			</div>
		</>
	);
};

export default HeroText;
