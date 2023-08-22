import { Component, JSXElement } from "solid-js";
import "./header.scss";

type Props = {
	id: string | number;
	href?: string;
	text?: string;
	class?: string;
	style?: {};
	icon?: JSXElement;
	containerClassName?: string;
};

const HeaderSocialLinkItem: Component<Props> = (props) => {
	return (
		<div class={`header--social--link--item--container`}>
			<a
				href={`${props.href}`}
				target="_blank"
				rel="noopener noreferrer"
				style={props.style}
				class={`header--social--link--item--link`}
			>
				{props.text}
			</a>
		</div>
	);
};

export default HeaderSocialLinkItem;
