import { Component, Setter, createEffect, createSignal, onCleanup } from "solid-js";
import { headerNavigationLink } from "../../../../content/link-content";
import NavigationList from "../../navigation/navigation-list/navigation-list";
import HeaderSocialLinkList from "./header-social-link-list";
import "./header.scss";
import HeaderNavigationList from "./header-navigation-list";

interface Props {
	cursorType?: string;
	setCursorType?: Setter<string>;
}

const Header: Component<Props> = (props: Props) => {

	let sectionElementRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;
	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// if (entry.isIntersecting) {
					// 	setIsOpen(true);
					// 	animateSection(true);
					// } else {
					// 	setIsOpen(false);
					// 	animateSection(false);
					// }
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(sectionElementRef);

		onCleanup(() => {
			observer.disconnect();
		});
	});

	return (
		<div ref={sectionElementRef} class="header--container">
			<div class="header--sub--container">
				<HeaderSocialLinkList />

				<HeaderNavigationList link={headerNavigationLink} />
			</div>
		</div>
	);
};

export default Header;
