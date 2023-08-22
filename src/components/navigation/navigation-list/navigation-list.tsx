import gsap from "gsap";
import { Component, For, Show, createEffect } from "solid-js";
import { NAVIGATION_TYPE } from "../../../../enum";
import { IHeaderNavigationLink } from "../../../../interface";
import HeaderNavigationItemLink from "../../section/header/header-navigation-item-link";
import "./navigation-list.scss";

type Props = {
	link?: IHeaderNavigationLink[];
	isOpen?: boolean | undefined;
};

const NavigationList: Component<Props> = (props) => {
	const linkContainers: HTMLSpanElement[][] = [];
	const anchorBorderElements: HTMLDivElement[] = [];

	const animateAnchor = (element: HTMLSpanElement, index: number) => {
		gsap.fromTo(
			element,
			{ scale: 1, color: "#FFFFFF" },
			{
				scale: 1.2,
				duration: 0.1,
				delay: 0.1 + index * 0.1,
				color: "#F96F21",
				onComplete: () => {
					resetAnchor(element);
				},
			}
		);
	};

	const resetAnchor = (element: HTMLSpanElement) => {
		gsap.to(element, {
			scale: 1,
			duration: 0.1,
			color: "#FFFFFF",
		});
	};

	const openAnchorBorder = (element: HTMLDivElement) => {
		gsap.fromTo(
			element,
			{
				width: "0px",
			},
			{
				duration: 0.4,
				width: "100%",
			}
		);
	};

	const closeAnchorBorder = (element: HTMLDivElement) => {
		gsap.to(element, {
			duration: 0.4,
			width: "0px",
			ease: "bounce.out",
		});
	};

	const animateAnchorSection = (
		elements: HTMLSpanElement[],
		index: number
	) => {
		gsap.fromTo(
			elements,
			{
				opacity: 0,
				yPercent: 200,
			},
			{
				duration: 1,
				opacity: 1,
				delay: 0.1 + index * 0.2,
				yPercent: 0,
			}
		);
	};

	const triggerOpenAnchorBorderAnimation = (index: number) => {
		openAnchorBorder(anchorBorderElements[index]);
	};

	const triggerCloseAnchorBorderAnimation = (index: number) => {
		closeAnchorBorder(anchorBorderElements[index]);
	};

	const triggerAnchorAnimation = (index: number) => {
		linkContainers[index].map((element: HTMLSpanElement, idx: number) => {
			animateAnchor(element, idx);
		});
	};

	createEffect(() => {
		// Flag
		props.isOpen;

		linkContainers.map((refElement, index) =>
			animateAnchorSection(refElement, index)
		);
	});

	return (
		<div class="flex flex-row items-center sm:items-start md:items-center gap-x-5">
			<For each={props.link}>
				{(link, index) => (
					<div>
						<Show when={link.type === NAVIGATION_TYPE.LINK}>
							<HeaderNavigationItemLink
								id={link.id}
								class={link.class}
								href={link.href}
								icon={link.icon}
								text={link.text}
								style={link.style}
								containerClassName={link.containerClassName}
								renderLink={
									<a
										onMouseEnter={() => {
											triggerAnchorAnimation(index());
											triggerOpenAnchorBorderAnimation(
												index()
											);
										}}
										onMouseLeave={() =>
											triggerCloseAnchorBorderAnimation(
												index()
											)
										}
										href={`https://${link.href}`}
										target="_blank"
										rel="noopener noreferrer"
										style={link.style?.style}
										class={`relative w-full flex flex-row items-center px-3 py-0.5 text-base font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent hover:text ${link.class}`}
									>
										<For each={link.text?.split("")}>
											{(text) => (
												<span
													class={`h-max`}
													ref={(element) => {
														if (
															!linkContainers[
																index()
															]
														) {
															linkContainers[
																index()
															] = [];
														}
														linkContainers[
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

										<div
											ref={(element) =>
												(anchorBorderElements[index()] =
													element!)
											}
											class="absolute left-1/2 bottom-0 -translate-y-1/2 -translate-x-1/2 bg-white h-[0.01rem] rounded-full"
										></div>
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
