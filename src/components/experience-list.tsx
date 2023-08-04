import Folder from "../../icon/folder";
import { IExperience } from "../../interface";
import ExperienceItem from "./experience-item";
import { experienceContent } from '../../content/experience-content';
import { Component, For } from "solid-js";

type Props = {
	experienceContent: IExperience[];
};

const ExperienceList: Component<Props> = (props: Props) => {

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
