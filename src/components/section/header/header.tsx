import "./header.scss";
import gsap from "gsap";
import HeaderNavigationList from "./header-navigation-list";
import { Component, Setter, createEffect, createSignal, onCleanup } from "solid-js";
import {headerNavigationLink, headerSocialMediaLink} from "../../../../content/link-content";

interface Props {
	cursorType?: string;
	setCursorType?: Setter<string>;
}

type RefType =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const animateSection = (element: RefType, isOpen: boolean) => {
	gsap.fromTo(
		element,
		{
			// opacity: 0,
			duration: 1.5,
			yPercent: -100,
			ease: "power3.out",
		},
		{
			yPercent: 0,
			duration: 1.5,
			// opacity: 1,
			ease: "power2.out",
		}
	);
};

const Header: Component<Props> = (props: Props) => {

	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	let sectionElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;
	let subSectionElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsOpen(true)
						animateSection(sectionElementRef, isOpen());
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		// @ts-ignore
		observer.observe(sectionElementRef);

		onCleanup(() => {
			observer.disconnect();
		});
	});

	return (
		<div ref={sectionElementRef} class="header--container">
			<div ref={subSectionElementRef} class="header--sub--container">
				<HeaderNavigationList navigation={headerSocialMediaLink} isOpen={isOpen()} />

				<HeaderNavigationList navigation={headerNavigationLink} isOpen={isOpen()} />
			</div>
		</div>
	);
};

export default Header;
