import { Component, For, Show } from "solid-js";
import { headerNavigationLink } from "../../../content/link-content";
import { NAVIGATION_TYPE } from "../../../enum";
import { IHeaderNavigationLink } from "../../../interface";
import HeaderNavigationItem from "./header-navigation-item";

type Props = {
	link?: IHeaderNavigationLink[];
	cursorType?: string;
	setCursorType?: WritableStream<String>;
};

const HeaderNavigationList: Component<Props> = (props) => {
	return (
		<div class="flex flex-row items-center sm:items-start md:items-center gap-x-4">
			<For each={props.link}>
				{(link, index) => (
					<div>
						<Show when={link.type === NAVIGATION_TYPE.LINK}>
							<HeaderNavigationItem
								id={link.id}
								class={link.class}
								href={link.href}
								icon={link.icon}
								text={link.text}
								style={link.style}
								containerClassName={link.containerClassName}
								renderLink={
									<a
										// onMouseEnter={() =>
										// 	setCursorType &&
										// 	setCursorType("hover--link")
										// }
										// onMouseLeave={() =>
										// 	setCursorType && setCursorType("")
										// }
										href={`https://${link.href}`}
										target="_blank"
										rel="noopener noreferrer"
										style={link.style?.style}
										class={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${link.class}`}
									>
										{link.text}
									</a>
								}
							/>
						</Show>
						<Show when={link.type === NAVIGATION_TYPE.STATIC}>
							<HeaderNavigationItem
								id={link.id}
								class={link.class}
								href={link.href}
								icon={link.icon}
								text={link.text}
								style={link.style}
								containerClassName={link.containerClassName}
								// renderLink={
								// 	<a
								// 		onMouseEnter={() =>
								// 			setCursorType &&
								// 			setCursorType("hover--link")
								// 		}
								// 		onMouseLeave={() =>
								// 			setCursorType && setCursorType("")
								// 		}
								// 		href={`${href}`}
								// 		style={style}
								// 		class={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${class}`}
								// 	>
								// 		{text}
								// 	</a>
								// }
							/>
						</Show>
					</div>
				)}
			</For>
		</div>
	);
};

export default HeaderNavigationList;
