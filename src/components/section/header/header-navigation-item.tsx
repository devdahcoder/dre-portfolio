import { Component, JSXElement } from "solid-js";
import { IStyle } from "../../../../interface";

type Props = {
	id: string | number;
	href?: string;
	text?: string;
	class?: string;
	style?: IStyle;
	icon?: JSXElement;
	containerClassName?: string;
	renderLink?: JSXElement;
};

const HeaderNavigationItem: Component<Props> = (props) => {
	return (
		<div
			class={`header--navigation--item--container ${props.containerClassName}`}
		>
			{props.text}
		</div>
	);
};

export default HeaderNavigationItem;
