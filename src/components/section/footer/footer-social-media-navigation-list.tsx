import gsap from "gsap";
import { Component, For, Show, createEffect } from "solid-js";
import { NAVIGATION_TYPE } from "../../../../enum";
import { IHeaderNavigationLink } from "../../../../interface";
import FooterSocialMediaNavigationItem from "./footer-social-media-navigation-item";
import "./footer.scss";

type Props = {
	isOpen: boolean;
	link?: IHeaderNavigationLink[];
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

const animateAnchor = (element: HTMLElement, index: number) => {
	gsap.fromTo(
		element,
		{ scale: 1, color: "#ffffff" },
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
							index={index()}
							href={link.href}
							icon={link.icon}
							text={link.text}
							class={link.class}
							style={link.style}
							linkContainers={linkContainers}
							anchorBorderElements={anchorBorderElements}
							containerClassName={link.containerClassName}
							triggerAnchorAnimation={triggerAnchorAnimation}
							triggerOpenAnchorBorderAnimation={triggerOpenAnchorBorderAnimation}
							triggerCloseAnchorBorderAnimation={triggerCloseAnchorBorderAnimation}
						/>
					</Show>
				)}
			</For>
		</div>
	);
};

export default FooterSocialMediaNavigationList;
