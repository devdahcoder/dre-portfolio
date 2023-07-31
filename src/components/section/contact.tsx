import { createSignal, createEffect, onCleanup } from "solid-js";
import ParallaxCharacter from "../parallax-character";
import gsap from "gsap";
import { elementObserver } from "../../../hook";

type Props = {};

type htmlDivElementRef =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const Contact = (props: Props) => {

	let sectionRef: htmlDivElementRef;
	let openToOpportunityRef: htmlDivElementRef;
	const interestedRefs: htmlDivElementRef[] = [];
	const coffeeRefs: htmlDivElementRef[] = [];

	const [interestedArrayText, setInterestedArrayText] = createSignal<string>(
		"Interested-in-working-together?"
	);
	const [coffeeArrayText, setCoffeeArrayText] = createSignal<string>(
		"Let-me-buy-you-coffee"
	);

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
			}
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
		<div
			ref={sectionRef}
			id="contact-section"
			class="py-20 bg-[#151515] overflow-hidden"
		>
			<div class="flex flex-col items-start justify-start gap-y-5 w-4/5 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div ref={openToOpportunityRef}>
					<div class="flex flex-row items-center gap-x-3 py-1 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

						<p>Open to opportunities</p>
					</div>
				</div>

				<div class="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<ParallaxCharacter
						subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
						class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
						refElementContainer={interestedRefs}
						textArray={interestedArrayText().split("")}
					/>

					<div class={`flex flex-row gap-x-3`}>
						<ParallaxCharacter
							subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
							class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
							refElementContainer={coffeeRefs}
							textArray={coffeeArrayText().split("")}
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

				<div>
					<a
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						class="flex flex-row items-center justify-center w-full py-1 text-2xl text-orange-600"
					>
						Book a call
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
