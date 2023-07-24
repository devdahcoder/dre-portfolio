import { Component, JSXElement } from "solid-js";
import { useCursor } from "../../../hook";

type Props = {
	id: string | number;
	href?: string;
	text?: string;
	class?: string;
	style?: {};
	icon?: JSXElement;
	containerClassName?: string;
	// cursorType: string;
	// setCursorType: WritableStream<String>;
};

const HeaderSocialLinkItem: Component<Props> = (props) => {
	return (
		<div class={`flex flex-row items-center ${props.containerClassName}`}>
			<a
				// onMouseEnter={() => props.setCursorType("hover--link")}
				// onMouseLeave={() => props.setCursorType("")}
				href={`${props.href}`}
				target="_blank"
				rel="noopener noreferrer"
				style={props.style}
				class={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${props.class}`}
			>
				{props.text}
			</a>
		</div>
	);
};

export default HeaderSocialLinkItem;
