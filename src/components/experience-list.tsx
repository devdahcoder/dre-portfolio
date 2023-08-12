import Folder from "../../icon/folder";
import { IExperience } from "../../interface";
import ExperienceItem from "./experience-item";
import { experienceContent } from "../../content/experience-content";
import { Component, For, createEffect } from "solid-js";
import gsap from "gsap";

type Props = {
	experienceContent: IExperience[];
	isOpen?: boolean;
};

const ExperienceList: Component<Props> = (props: Props) => {
	const experienceItemElements: HTMLLIElement[] = [];

	const animateExperienceItem = (element: HTMLLIElement, index: number) => {
		gsap.fromTo(
			element,
			{ y: 500, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				delay: 0.4 + index * 0.3,
				duration: 2.5,
				ease: "power1.inOut",
			}
		);
	};

	createEffect(() => {
		if (props.isOpen === true) {
			experienceItemElements.map((element, index) =>
				animateExperienceItem(element, index)
			);
		}
	});

	return (
		<div class="flex flex-col items-start gap-y-8">
			<For each={props.experienceContent}>
				{(experienceContent, index) => (
					<ExperienceItem
						index={experienceContent.index}
						text={experienceContent.text}
						detail={experienceContent.detail}
						href={experienceContent.href}
						id={experienceContent.id}
						experienceItemElements={experienceItemElements}
					/>
				)}
			</For>

			<div class="">
				<a
					download={`Damilare Resume`}
					type="pdf"
					href="./file/dre_resume.pdf"
					class="w-full flex flex-row items-center justify-start text-orange-600 gap-x-3 text-xl font-medium no-underline"
				>
					Download resume
					<Folder class="fill-white w-5 h-5" />
				</a>
			</div>
		</div>
	);
};

export default ExperienceList;
