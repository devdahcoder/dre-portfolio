import gsap from "gsap";
import { Component, createEffect, createSignal, onCleanup } from "solid-js";
import { footerSocialMediaLink } from "../../../../content/link-content";
import NavigationList from "../../navigation/navigation-list/navigation-list";
import "./footer.scss";
import FooterSocialMediaNavigationList from "./footer-social-media-navigation-list";
import {elementObserver} from "../../../../hook";

type Props = {};
type RefType =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const animateSection = (element: RefType, isOpen: boolean) => {
	gsap.fromTo(
		element,
		{
			yPercent: isOpen ? 200 : 0,
			delay: isOpen ? 0.3 : 0,
			opacity: isOpen ? 0 : 1,
			duration: isOpen ? 1.5 : 0,
			ease: isOpen ? "power3.out" : "power3.in",
		},
		{
			yPercent: isOpen ? 0 : 200,
			duration: 1.5,
			ease: "power2.out",
			opacity: isOpen ? 1 : 0,
		}
	);
};

const Footer: Component<Props> = (props: Props) => {
	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	let sectionElementRef: RefType;

	let subSectionElementRef: RefType;

	createEffect(() => {
		elementObserver(sectionElementRef, (entry, observer) => {
			if (entry.isIntersecting) {
				setIsOpen(true);
				animateSection(subSectionElementRef, isOpen());
			} else {
				setIsOpen(false);
				animateSection(subSectionElementRef, isOpen());
			}
		})
	});

	return (
		<div ref={sectionElementRef} class="footer--container">
			<div ref={subSectionElementRef} class="footer--sub--container">
				<div class="footer--content--container">
					<div class="footer--social--media--links--navigation--container">
						<FooterSocialMediaNavigationList
							link={footerSocialMediaLink}
							isOpen={isOpen()}
						/>
					</div>

					<div class="footer--collaboration--text--container">
						<p>
							Collaborative work of{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/damilare007/"
									target="_blank"
									rel="noopener noreferrer"
									class={`footer--collaboration--link`}
								>
									Damilare
								</a>
							</span>{" "}
							x{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/olamide-adigun-200/"
									target="_blank"
									rel="noopener noreferrer"
									class={`footer--collaboration--link`}
								>
									Olamide
								</a>
							</span>{" "}
							(Dev)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
