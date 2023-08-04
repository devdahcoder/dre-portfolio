import { Component, createEffect, createSignal, onCleanup } from "solid-js";
import { footerSocialMediaLink } from "../../../content/link-content";
import NavigationList from "../navigation/navigation-list/navigation-list";
import gsap from "gsap";

type Props = {};

const Footer: Component<Props> = (props: Props) => {

	const [isOpen, setIsOpen] = createSignal<boolean | undefined>(false);

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
				yPercent: isOpen ? 150 : 0,
				delay: isOpen ? 0.3 : 0,
				opacity: isOpen ? 0 : 1,
				duration: isOpen ? 1 : 0
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
						setIsOpen(false)
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
		<div ref={sectionElementRef} class="overflow-y-hidden">
			<div ref={subSectionElementRef} class="border-t-[0.01rem] bg-[#151515] px-3">
				<div class="flex flex-col lg:flex-row items-start sm:items-center justify-between py-5 w-4/5 sm:mx-auto sm:my-0 gap-y-5">
					<div class="flex flex-row items-center ">
						<NavigationList link={footerSocialMediaLink} isOpen={isOpen()} />
					</div>

					<div class="text-white">
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
