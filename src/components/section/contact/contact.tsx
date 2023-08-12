import gsap from "gsap";
import { createEffect, createSignal, onCleanup } from "solid-js";
import ParallaxCharacter from "../../parallax-character";
import "./contact.scss";

type Props = {};

type htmlDivElementRef =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const Contact = (props: Props) => {
	let sectionRef: htmlDivElementRef;
	let openToOpportunityRef: htmlDivElementRef;
	let contactAnchorRefOne:
		| HTMLAnchorElement
		| ((el: HTMLAnchorElement) => void)
		| undefined
		| any;
	let contactAnchorRefTwo:
		| HTMLAnchorElement
		| ((el: HTMLAnchorElement) => void)
		| undefined
		| any;
	let contactAnchorBorderTop: htmlDivElementRef;
	let contactAnchorBorderRight: htmlDivElementRef;
	let contactAnchorBorderBottom: htmlDivElementRef;
	let contactAnchorBorderLeft: htmlDivElementRef;
	let openToOpportunityIndicatorRef: htmlDivElementRef;
	const interestedRefs: htmlDivElementRef[] = [];
	const coffeeRefs: htmlDivElementRef[] = [];

	const [hoverContactAnchor, setHoverContactAnchor] =
		createSignal<boolean>(false);

	const [interestedText, setInterestedText] = createSignal<string>(
		"Interested-in-working-together?"
	);

	const [coffeeText, setCoffeeText] = createSignal<string>(
		"Let-me-buy-you-coffee"
	);

	const [contactLinkText, setContactLinkText] = createSignal<string[]>([
		"Book a call",
		"Book a call",
	]);

	const [showCoffeeEmoji, setShowCoffeeEmoji] = createSignal<boolean>(false);

	const animateParallax = (
		elementRef: htmlDivElementRef,
		index: number,
		delay?: number
	) => {
		gsap.fromTo(
			elementRef,
			{
				scale: 0,
				opacity: 0,
				delay: 0.5,
				yPercent: 70,
				force3D: true,
			},
			{
				duration: 0.5,
				opacity: 1,
				scale: 1,
				delay: delay ? delay : 0.2 + index * 0.1,
				yPercent: 0,
				ease: "back.out",
				onComplete: () => {
					setShowCoffeeEmoji(true);
				},
			}
		);
	};

	const animateOpenToOpportunity = () => {
		gsap.fromTo(
			openToOpportunityRef,
			{ yPercent: -300, opacity: 0, delay: 0.5 },
			{
				yPercent: 0,
				duration: 1.5,
				opacity: 1,
				ease: "back.out",
				// onComplete: () => {
				// 	animateOpenToOpportunityIndicator();
				// },
			}
		);
	};

	const animateAnchorRefOne = (hoverContactAnchor: boolean) => {
		gsap.fromTo(
			contactAnchorRefOne,
			{
				yPercent: hoverContactAnchor ? 0 : -100,
				ease: "power1.out",
				transform: "rotate3d(0)",
				transformStyle: "preserve-3d",
			},
			{
				yPercent: hoverContactAnchor ? -100 : 0,
				duration: 0.4,
				transform: "rotate3d(1, 0, 0, 1turn)",
				transformStyle: "preserve-3d",
			}
		);
	};

	const animateAnchorRefTwo = (hoverContactAnchor: boolean) => {
		gsap.fromTo(
			contactAnchorRefTwo,
			{
				yPercent: hoverContactAnchor ? 0 : -100,
				duration: 1,
				ease: "power1.out",
				// transform: "transform: rotate3d(1, 0, 0, -1turn)",
				transformStyle: "preserve-3d",
			},
			{
				yPercent: hoverContactAnchor ? -100 : 0,
				// transform: "rotate3d(0)",
				transformStyle: "preserve-3d",
			}
		);
	};

	const animateOpenToOpportunityIndicator = () => {
		gsap.fromTo(
			openToOpportunityIndicatorRef,
			{
				width: "100%",
				height: "100%",
				backgroundColor: "#FFFFFF",
				duration: 2,
				left: 0,
				ease: "power2.out",
			},
			{
				width: "0.5rem",
				height: "0.5rem",
				backgroundColor: "#0BAD0B",
				duration: 3,
				left: "1rem",
				ease: "power2.out",
			}
		);
	};

	const mouseHoverTriggerAnchorRef = () => {
		setHoverContactAnchor(true);
		animateAnchorRefOne(hoverContactAnchor());
		animateAnchorRefTwo(hoverContactAnchor());
		gsap.fromTo(contactAnchorBorderTop, { width: 0 }, { width: "100%" });
		gsap.fromTo(
			contactAnchorBorderRight,
			{ height: 0 },
			{ height: "100%" }
		);
		gsap.fromTo(contactAnchorBorderBottom, { width: 0 }, { width: "100%" });
		gsap.fromTo(
			contactAnchorBorderLeft,
			{ height: 0 },
			{ height: "100%" }
		);
	};

	const mouseOutTriggerAnchorRef = () => {
		setHoverContactAnchor(false);
		animateAnchorRefOne(hoverContactAnchor());
		animateAnchorRefTwo(hoverContactAnchor());
		gsap.fromTo(contactAnchorBorderTop, { width: "100%" }, { width: 0 });
		gsap.fromTo(
			contactAnchorBorderRight,
			{ height: "100%" },
			{ height: 0 }
		);
		gsap.fromTo(
			contactAnchorBorderBottom,
			{ width: "100%" },
			{ width: 0 }
		);
		gsap.fromTo(
			contactAnchorBorderLeft,
			{ height: "100%" },
			{ height: 0 }
		);
	};

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateOpenToOpportunity();
						interestedRefs.map((ref, index) =>
							animateParallax(ref, index)
						);
						coffeeRefs.map((ref, index) =>
							animateParallax(ref, index, 0.8 + index * 0.1)
						);
						observer.unobserve(entry.target); // Stop observing once the section is in view (if you only want it to trigger once)
					}
				});
			},
			{ threshold: 0.2 }
		); // Adjust the threshold as needed for the intersection area

		observer.observe(sectionRef);

		onCleanup(() => {
			observer.disconnect(); // Clean up the observer when the component unmounts
		});
	});

	return (
		<div ref={sectionRef} id="contact-section" class="contact--section">
			<div class="contact--subsection w-11/12 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div ref={openToOpportunityRef}>
					<div class="relative flex flex-row items-center py-1.5 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div
							ref={openToOpportunityIndicatorRef}
							class="bg-green-400 absolute w-2 h-2 rounded-full animate-pulse top-1/2 -translate-x-0 -translate-y-1/2"
						></div>

						<p class="ml-4">Open to opportunities</p>
					</div>
				</div>

				<div class="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<ParallaxCharacter
						subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
						class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
						refElementContainer={interestedRefs}
						textArray={interestedText().split("")}
					/>

					<div class={`flex flex-row gap-x-3`}>
						<ParallaxCharacter
							subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
							class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
							refElementContainer={coffeeRefs}
							textArray={coffeeText().split("")}
						/>

						<div class="flex flex-row items-center justify-center align-middle">
							{showCoffeeEmoji() ? (
								<div class="h-11">
									<img
										class="w-full h-full object-contain"
										src="./image/expresso.png"
										alt=""
									/>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>

				<div
					onMouseEnter={mouseHoverTriggerAnchorRef}
					onMouseLeave={mouseOutTriggerAnchorRef}
					class="relative overflow-y-hidden flex flex-col max-h-11 p-1 cursor-pointer"
				>
					<div
						class="absolute top-0 left-0 bg-white h-[0.01rem] z-0"
						ref={contactAnchorBorderTop}
					></div>
					<div
						class="absolute top-0 right-0 bg-white h-[0.01rem] w-[1px] z-0"
						ref={contactAnchorBorderRight}
					></div>
					<div
						class="absolute bottom-[1px] right-0 bg-white h-[0.01rem] z-0"
						ref={contactAnchorBorderBottom}
					></div>
					<div
						class="absolute left-0 bottom-0 bg-white h-[0.01rem] w-[1px] z-0"
						ref={contactAnchorBorderLeft}
					></div>
					<a
						ref={contactAnchorRefOne}
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-row items-center justify-center h-fit w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
					<a
						ref={contactAnchorRefTwo}
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-row h-fit items-center justify-center w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
