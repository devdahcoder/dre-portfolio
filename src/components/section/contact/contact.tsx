import gsap from "gsap";
import { For, createEffect, createSignal, onCleanup } from "solid-js";
import ParallaxCharacter from "../../parallax-character";
import "./contact.scss";
import ContactLink from "./contact-link";
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';

type Props = {};

type htmlDivElementRef =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const animateParallax = (
	elementRef: htmlDivElementRef,
	index: number,
	delay?: number
) => {
	gsap.fromTo(
		elementRef,
		{
			opacity: 0,
			yPercent: 100,
		},
		{
			duration: 0.5,
			opacity: 1,
			delay: delay ?? 0.1 + index * 0.1,
			yPercent: 0,
			ease: "power3.out",
		}
	);
};

const animateOpenToOpportunity = (element: HTMLDivElement) => {
	gsap.fromTo(
		element,
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

const animateOpenToOpportunityIndicator = (element: HTMLDivElement) => {
	gsap.fromTo(
		element,
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

	const [interestedText, setInterestedText] = createSignal<string[]>([
		"Interested",
		"-",
		"in",
		"-",
		"working",
		"-",
		"together?",
	]);

	const [coffeeText, setCoffeeText] = createSignal<string[]>([
		"Let",
		"-",
		"me",
		"-",
		"buy",
		"-",
		"you",
		"-",
		"coffee",
	]);

	const [showCoffeeEmoji, setShowCoffeeEmoji] = createSignal<boolean>(false);

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateOpenToOpportunity(openToOpportunityRef);
						// interestedRefs.forEach((ref, index) =>
						// 	animateParallax(ref, index)
						// );
						// coffeeRefs.forEach((ref, index) =>
						// 	animateParallax(ref, index, 0.1 + index * 0.1)
						// );
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
		<div
			ref={sectionRef}
			id="contact-section"
			class="contact--section--container"
		>
			<div class="contact--sub--container">
				<div
					ref={openToOpportunityRef}
					class="contact--opportunity--text--container"
				>
					<div
						ref={openToOpportunityIndicatorRef}
						class="contact--opportunity--indication animate-pulse"
					></div>

					<p>Open to opportunities</p>
				</div>

				<div class="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<ParallaxCharacter
						subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
						class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
						refElementContainer={interestedRefs}
						textArray={interestedText()}
					/>

					<div class={`flex flex-row gap-x-3`}>
						<ParallaxCharacter
							subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
							class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
							refElementContainer={coffeeRefs}
							textArray={coffeeText()}
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

				<ContactLink />
			</div>
		</div>
	);
};

export default Contact;
