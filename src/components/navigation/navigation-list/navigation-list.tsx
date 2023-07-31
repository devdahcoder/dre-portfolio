import gsap from "gsap";
import { Component, For, Show } from "solid-js";
import { NAVIGATION_TYPE } from "../../../../enum";
import { IHeaderNavigationLink } from "../../../../interface";
import HeaderNavigationItem from "../header-navigation-item";
import "./navigation-list.scss";

type Props = {
	link?: IHeaderNavigationLink[];
	cursorType?: string;
	setCursorType?: WritableStream<String>;
};

const NavigationList: Component<Props> = (props) => {
	const linkRefElementContainer: HTMLSpanElement[][] = [];

	const anchorAnimation = (refElement: HTMLSpanElement, index: number) => {
		gsap.fromTo(
			refElement,
			{ scale: 1, color: "FFFFFF" },
			{
				scale: 1.3,
				duration: 0.1,
				delay: 0.2 + index * 0.2,
				color: "#F96F21",
				onComplete: () => {
					scaleDown(refElement);
				},
			}
		);
	};

	const scaleDown = (refElement: HTMLSpanElement) => {
		gsap.to(refElement, {
			scale: 1,
			duration: 0.1,
			color: "#FFFFFF",
		});
	};

	const callAnchorAnimation = (index: number) => {
		linkRefElementContainer[index].map(
			(refElement: HTMLSpanElement, index: number) =>
				anchorAnimation(refElement, index)
		);
	};

	return (
		<div class="flex flex-row items-center sm:items-start md:items-center gap-x-5">
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
										onMouseEnter={() =>
											callAnchorAnimation(index())
										}
										href={`https://${link.href}`}
										target="_blank"
										rel="noopener noreferrer"
										style={link.style?.style}
										class={`navigation--link w-full flex flex-row items-center px-3 py-0.5 text-base font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent hover:text ${link.class}`}
									>
										<For each={link.text?.split("")}>
											{(text) => (
												<span
													class={`h-max font-staatliches`}
													ref={(element) => {
														if (
															!linkRefElementContainer[
																index()
															]
														) {
															linkRefElementContainer[
																index()
															] = [];
														}
														linkRefElementContainer[
															index()
														].push(element!);
													}}
												>
													{text === " " ||
													text === "-" ||
													text === "" ? (
														<span class="mx-1"></span>
													) : (
														text
													)}
												</span>
											)}
										</For>
									</a>
								}
							/>
						</Show>
					</div>
				)}
			</For>
		</div>
	);
};

export default NavigationList;
