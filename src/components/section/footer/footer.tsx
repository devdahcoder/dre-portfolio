import gsap from "gsap";
import { Component, createEffect, createSignal, onCleanup } from "solid-js";
import { footerSocialMediaLink } from "../../../../content/link-content";
import NavigationList from "../../navigation/navigation-list/navigation-list";
import "./footer.scss";
import FooterSocialMediaNavigationList from "./footer-social-media-navigation-list";

type Props = {};

const Footer: Component<Props> = (props: Props) => {
	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	let sectionElementRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;

	let subSectionElementRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;

	const linkClassName = `text-white hover:text-blue-700 hover:underline`;

	const animateSection = (isOpen: boolean) => {
		gsap.fromTo(
			subSectionElementRef,
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

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsOpen(true);
						animateSection(true);
					} else {
						setIsOpen(false);
						animateSection(false);
					}
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
									class={`${linkClassName}`}
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
									class={`${linkClassName}`}
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
