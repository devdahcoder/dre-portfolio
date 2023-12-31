import "./header.scss";
import gsap from "gsap";
import HeaderNavigationList from "./header-navigation-list";
import { Component, Setter, createEffect, createSignal, onCleanup } from "solid-js";
import {headerNavigationLink, headerSocialMediaLink} from "../../../../content/link-content";
import {elementObserver} from "../../../../hook";

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
			yPercent: -200,
			ease: "power3.out",
		},
		{
			yPercent: 0,
			duration: 1.5,
			ease: "power2.out",
		}
	);
};

const Header: Component<Props> = (props: Props) => {

	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	let sectionElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;
	let subSectionElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;

	createEffect(() => {
		elementObserver(sectionElementRef,
			(entry, observer) => {
				if (entry.isIntersecting) {
					setIsOpen(true)
					animateSection(sectionElementRef, isOpen());
					observer.unobserve(entry.target);
				}
			}
		);
	})

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
