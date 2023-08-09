import ExperienceList from "../experience-list";
import { experienceContent } from '../../../content/experience-content';
import { Component, createEffect, createSignal, observable, onCleanup, onMount, Ref } from 'solid-js';
import gsap from "gsap";


interface Props {};

const Experience = (props: Props) => {

	let sectionElementRef:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;
	
	let experienceTitleRef: gsap.TweenTarget | HTMLDivElement | ((el: HTMLDivElement) => void) | any | undefined;

	const [isOpen, setIsOpen] = createSignal<boolean>(false);

	onMount(() => {
		gsap.fromTo(experienceTitleRef, { xPercent: -200, duration: 1 }, { xPercent: 0, duration: 2 });
	});

	createEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setIsOpen(true);
					// else setIsOpen(false);
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
		<div ref={sectionElementRef} class="py-32 overflow-hidden">
			<div class="flex flex-col gap-y-16 w-11/12 sm:w-4/5 sm:my-0 sm:mx-auto px-3 font-cabinetgrotesk">
				<div
					ref={experienceTitleRef}
					class="text-3xl text-slate-400 font-semibold"
				>
					<p>Experience</p>
				</div>

				<ExperienceList isOpen={isOpen()} experienceContent={experienceContent} />
			</div>
		</div>
	);
};

export default Experience;
