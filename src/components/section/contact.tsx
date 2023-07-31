import { createSignal, createEffect, onCleanup } from "solid-js";
import ParallaxCharacter from "../parallax-character";
import gsap from "gsap";

type Props = {};

type htmlDivElementRef =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const Contact = (props: Props) => {
	let sectionElementRef: htmlDivElementRef;

	let openToOpportunityElementRef: htmlDivElementRef;

	const interestedRefElement: htmlDivElementRef[] = [];

	const coffeeRefElement: htmlDivElementRef[] = [];

	const [interestedArrayText, setInterestedArrayText] = createSignal<
		string[]
	>([
		"I",
		"n",
		"t",
		"e",
		"r",
		"e",
		"s",
		"t",
		"e",
		"d",
		"-",
		"i",
		"n",
		"-",
		"w",
		"o",
		"r",
		"k",
		"i",
		"n",
		"g",
		"-",
		"t",
		"o",
		"g",
		"e",
		"t",
		"h",
		"e",
		"r",
		"?",
	]);

	const [coffeeArrayText, setCoffeeArrayText] = createSignal<string[]>([
		"L",
		"e",
		"t",
		"-",
		"m",
		"e",
		"-",
		"b",
		"u",
		"y",
		"-",
		"y",
		"o",
		"u",
		"-",
		"c",
		"o",
		"f",
		"f",
		"e",
		"e",
	]);

	const [showCoffeeEmoji, setShowCoffeeEmoji] = createSignal<boolean>(false);

	const parallaxAnimation = (
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
				yPercent: 100,
				force3D: true,
			},
			{
				duration: 0.5,
				opacity: 1,
				scale: 1,
				delay: delay ? delay : 0.3 + index * 0.1,
				yPercent: 0,
				onComplete: () => {
					setShowCoffeeEmoji(true);
				},
			}
		);
	};

	const openToOpportunityAnimation = () => {
		gsap.fromTo(
			openToOpportunityElementRef,
			{ yPercent: -200, opacity: 0 },
			{
				yPercent: 0,
				duration: 1,
				opacity: 1,
			}
		);
	};

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						openToOpportunityAnimation();
						interestedRefElement.map((ref, index) =>
							parallaxAnimation(ref, index)
						);
						coffeeRefElement.map((ref, index) =>
							parallaxAnimation(ref, index, 0.8 + index * 0.1)
						);
						observer.unobserve(entry.target); // Stop observing once the section is in view (if you only want it to trigger once)
					}
				});
			},
			{ threshold: 0.2 }
		); // Adjust the threshold as needed for the intersection area

		observer.observe(sectionElementRef);

		onCleanup(() => {
			observer.disconnect(); // Clean up the observer when the component unmounts
		});
	});

	return (
		<div
			ref={sectionElementRef}
			id="contact-section"
			class="py-20 bg-[#151515] overflow-hidden"
		>
			<div class="flex flex-col items-start justify-start gap-y-5 w-4/5 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div ref={openToOpportunityElementRef}>
					<div class="flex flex-row items-center gap-x-3 py-1 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

						<p>Open to opportunities</p>
					</div>
				</div>

				<div class="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<ParallaxCharacter
						subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
						class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
						refElementContainer={interestedRefElement}
						textArray={interestedArrayText()}
					/>

					<div class={`flex flex-row gap-x-3`}>
						<ParallaxCharacter
							subContainerClassName={`min-h-max flex flex-row items-center overflow-hidden flex-wrap`}
							class={`!my-1 text-5xl bg-gradient-to-r from-gray-400 to-zinc-500 bg-clip-text text-transparent`}
							refElementContainer={coffeeRefElement}
							textArray={coffeeArrayText()}
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
