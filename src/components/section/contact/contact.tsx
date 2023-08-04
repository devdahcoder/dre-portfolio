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
	let openToOpportunityIndicatorRef: htmlDivElementRef;
	const interestedRefs: htmlDivElementRef[] = [];
	const coffeeRefs: htmlDivElementRef[] = [];

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
				onComplete: () => {
					animateOpenToOpportunityIndicator();
				},
			}
		);
	};

	const animateAnchorRefOne = () => {
		gsap.fromTo(
			contactAnchorRefOne,
			{
				yPercent: 0,
				duration: 1,
				ease: "power1.out",
				transform: "rotate3d(0)",
				transformStyle: "preserve-3d",
			},
			{
				yPercent: -100,
				transform: "rotate3d(1, 0, 0, 1turn)",
				transformStyle: "preserve-3d",
				onComplete: () => {
					animateAnchorRefTwo();
				}
			}
		);
	};

	const animateAnchorRefTwo = () => {
		gsap.fromTo(
			contactAnchorRefTwo,
			{
				yPercent: 100,
				duration: 1,
				ease: "power1.out",
				transform: "transform: rotate3d(1, 0, 0, 1turn)",
				transformStyle: "preserve-3d",
			},
			{
				yPercent: 0,
				transform: "rotate3d(0)",
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

	const triggerAnchorRef = () => {
		animateAnchorRefOne();
		// animateAnchorRefTwo();
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
			{/* <div class="cube">
				<div class="face front border border-red-50"></div>
				<div class="face back border border-yellow-100"></div>
				<div class="face left"></div>
				<div class="face right"></div>
			</div> */}
			<div class="contact--subsection w-4/5 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div ref={openToOpportunityRef}>
					<div class="relative flex flex-row items-center py-1.5 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div
							ref={openToOpportunityIndicatorRef}
							class="-z-10 rounded-full animate-pulse absolute top-1/2 -translate-x-0 -translate-y-1/2"
						></div>

						<p class="ml-3">Open to opportunities</p>
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
					onMouseEnter={triggerAnchorRef}
					class="border overflow-y-hidden flex flex-col max-h-11"
				>
					{/* <For each={contactLinkText()}>
						{(text, index) => (
							<a
								ref={contactAnchorRef}
								href="http://"
								target="_blank"
								rel="noopener noreferrer"
								class="max-h-11 flex flex-row items-center justify-center w-full py-1 text-2xl text-orange-600"
							>
								{text}
								{/* Book a call */}
					{/* </a>
						)}
					</For> */}

					<a
						ref={contactAnchorRefOne}
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						class="flex border border-yellow-500 flex-row items-center justify-center h-fit w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
					<a
						ref={contactAnchorRefTwo}
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						class="flex border border-yellow-500 flex-row h-fit items-center justify-center w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
