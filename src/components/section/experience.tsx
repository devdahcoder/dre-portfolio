import ExperienceList from "../experience-list";
import { experienceContent } from '../../../content/experience-content';
import { Component, onMount, Ref } from 'solid-js';
import gsap from "gsap";


interface Props {};

const Experience = (props: Props) => {
	
	let experienceTitleRef: gsap.TweenTarget | HTMLDivElement | ((el: HTMLDivElement) => void) | any | undefined;

	onMount(() => {
		gsap.fromTo(experienceTitleRef, { xPercent: -200, duration: 1 }, { xPercent: 0, duration: 2 });
	});
	
	return (
		<div class="py-16">
			<div class="flex flex-col gap-y-20 w-11/12 sm:w-4/5 sm:my-0 sm:mx-auto px-3 font-cabinetgrotesk">
				<div
					ref={experienceTitleRef}
					class="text-3xl text-slate-400 font-semibold"
				>
					<p>Experience</p>
				</div>

				<ExperienceList experienceContent={experienceContent} />
			</div>
		</div>
	);
};

export default Experience;
