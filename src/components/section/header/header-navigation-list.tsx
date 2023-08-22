import { Component, For } from "solid-js";
import { IHeaderNavigationLink } from "../../../../interface";
import HeaderNavigationItem from "./header-navigation-item";

interface Props {
	link: IHeaderNavigationLink[];
}

const HeaderNavigationList: Component<Props> = (props) => {
	return (
		<div class="header--navigation--list--container">
			<For each={props.link}>
				{(props, index) => (
					<HeaderNavigationItem
						id={props.id}
						class={props.class}
						containerClassName={props.containerClassName}
						href={props.href}
						icon={props.icon}
						text={props.text}
					/>
				)}
			</For>
		</div>
	);
};

export default HeaderNavigationList;
