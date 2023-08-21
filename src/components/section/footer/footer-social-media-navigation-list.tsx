import gsap from "gsap";
import { Component, For, Show, createEffect } from "solid-js";
import { NAVIGATION_TYPE } from "../../../../enum";
import { IHeaderNavigationLink } from "../../../../interface";
import FooterSocialMediaNavigationItem from "./footer-social-media-navigation-item";
import "./footer.scss";

type Props = {
	link?: IHeaderNavigationLink[];
	isOpen: boolean;
};

const animateAnchor = (element: HTMLElement, index: number) => {
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

const resetAnchor = (element: HTMLElement) => {
	gsap.to(element, {
		scale: 1,
		duration: 0.1,
		color: "#FFFFFF",
	});
};

const openAnchorBorder = (element: HTMLElement) => {
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

const closeAnchorBorder = (element: HTMLElement) => {
	gsap.to(element, {
		duration: 0.4,
		width: "0px",
		ease: "bounce.out",
	});
};

const animateAnchorSection = (elements: HTMLElement[], index: number) => {
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

const FooterSocialMediaNavigationList: Component<Props> = (props) => {

	const linkContainers: HTMLSpanElement[][] = [];
	const anchorBorderElements: HTMLDivElement[] = [];

	const triggerOpenAnchorBorderAnimation = (index: number) => {
		openAnchorBorder(anchorBorderElements[index]);
	};

	const triggerCloseAnchorBorderAnimation = (index: number) => {
		closeAnchorBorder(anchorBorderElements[index]);
	};

	const triggerAnchorAnimation = (index: number) => {
		linkContainers[index].forEach(
			(element: HTMLSpanElement, idx: number) => {
				animateAnchor(element, idx);
			}
		);
	};

	createEffect(() => {
		if (props.isOpen) {
			linkContainers.forEach((refElement, index) => {
				animateAnchorSection(refElement, index);
			});
		}
	});

	return (
		<div class="footer--social--media--navigation--list--container">
			<For each={props.link}>
				{(link, index) => (
					<Show when={link.type === NAVIGATION_TYPE.LINK}>
						<FooterSocialMediaNavigationItem
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
									class={`footer--social--media--navigation--link ${link.class}`}
								>
									<For each={link.text?.split("")}>
										{(text) => (
											<span
												class={`footer--social--media--navigation--link--text h-max`}
												ref={(element) => {
													if (!linkContainers[index()]) {
														linkContainers[index()] = [];
													}
													linkContainers[index()].push(element!);
												}}
											>
												{text === " " ||
												text === "-" ||
												text === "" ? (
													<span class="footer--social--media--navigation--link--text--space mx-1"></span>
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
										class="footer--social--media--navigation--link--border"
									></div>
								</a>
							}
						/>
					</Show>
				)}
			</For>
		</div>
	);
};

export default FooterSocialMediaNavigationList;
