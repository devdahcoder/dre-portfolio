import gsap from "gsap";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { experienceContent } from "../../../../content/experience-content";
import ExperienceList from "./experience-list";
import "./experience.scss";

interface Props {}

const Experience = (props: Props) => {
	let sectionElementRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;

	let experienceTitleRef:
		| gsap.TweenTarget
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| any
		| undefined;

	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	// onMount(() => {
	// 	gsap.fromTo(
	// 		experienceTitleRef,
	// 		{ xPercent: -200, duration: 1 },
	// 		{ xPercent: 0, duration: 2 }
	// 	);
	// });

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setIsOpen(true);
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
		<div ref={sectionElementRef} class="experience--container">
			<div class="experience--sub--container">
				<div
					ref={experienceTitleRef}
					class="experience--header--container"
				>
					<p>Experience</p>
				</div>

				<ExperienceList
					isOpen={isOpen()}
					experienceContent={experienceContent}
				/>
			</div>
		</div>
	);
};

export default Experience;
