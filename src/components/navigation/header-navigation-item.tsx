import { Component, JSXElement } from "solid-js";
import { IStyle } from "../../../interface";

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
		<div class={`flex flex-row items-center ${props.containerClassName}`}>
			{props.renderLink}
		</div>
	);
};

export default HeaderNavigationItem;
