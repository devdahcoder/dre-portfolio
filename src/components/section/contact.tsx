import { createSignal, createEffect, onMount, onCleanup } from "solid-js";
import ParallaxCharacter from "../parallax-character";
import gsap from "gsap";

type Props = {};

const Contact = (props: Props) => {
	
	let sectionRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;

	const [contactText, setContactText] = createSignal<Array<Array<string>>>([
		["I", "n", "t", "e", "r", "e", "s", "t", "e", "d"],
		["i", "n"],
		["w", "o", "r", "k", "i", "n", "g"],
		["t", "o", "g", "e", "t", "h", "e", "r", "?"],
		["L", "e", "t"],
		["m", "e"],
		["b", "u", "y"],
		["y", "o", "u"],
		["c", "o", "f", "f", "e", "e"],
	]);

	const animateSection = (target: any) => {
		console.log("How far were here");
		gsap.from(target, {
			opacity: 0,
			duration: 1,
			ease: "power2.out",
		});
	};

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateSection(sectionRef); // Call the animation function when the section is in view
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
		<div ref={sectionRef} id="contact-section" class="py-20 bg-[#151515]">
			<div class="flex flex-col items-start justify-start gap-y-5 w-4/5 sm:my-0 sm:mx-auto px-3 transition-all duration-500 ease-in-out">
				<div>
					<div class="flex flex-row items-center gap-x-3 py-1 px-5 rounded-full border bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
						<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

						<p>Open to opportunities</p>
					</div>
				</div>

				<div class="text-5xl font-bold font-cabinetgrotesk bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<span>Interested in working together?</span> <br />{" "}
					<div
						class={`flex flex-row items-center flex-wrap  gap-x-3`}
					>
						{/* {contactText
							?.slice(0, 4)
							?.map((arrayText: Array<string>, index: number) => (
								<ParallaxCharacter
									key={index}
									subContainerClassName={`text-5xl`}
									class={`!my-1 text-5xl text-white text-transparent`}
									textArray={arrayText}
								/>
							))} */}
					</div>
					<div class={`flex flex-row gap-x-3`}>
						{/* {contactText
							?.slice(4)
							?.map((arrayText: Array<string>, index: number) => (
								<ParallaxCharacter
									key={index}
									subContainerClassName={`text-5xl`}
									class={`!my-1 text-5xl text-white text-transparent`}
									textArray={arrayText}
								/>
							))} */}
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
