import { For } from "solid-js";
import { headerSocialMediaLink } from "../../../../../content/link-content";
import { IHeaderSocialMediaLink } from "../../../../../interface";
import HeaderSocialLinkItem from "./header-social-link-item";

type Props = {
	cursorType?: string;
};

const HeaderSocialLinkList = (props: Props) => {
	const linkContainers: HTMLSpanElement[][] = [];

	return (
		<div class="flex flex-row items-center gap-x-4">
			<For each={headerSocialMediaLink}>
				{(props, index) => (
					<HeaderSocialLinkItem
						id={props.id}
						class={props.class}
						href={props.href}
						icon={props.icon}
						text={props.text}
						style={props.style}
						containerClassName={props.containerClassName}
					/>
				)}
			</For>
		</div>
	);
};

export default HeaderSocialLinkList;
