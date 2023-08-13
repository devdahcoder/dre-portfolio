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
	const experienceItemElementText: HTMLSpanElement[][] = [];

	const animateExperienceItem = (element: HTMLLIElement, index: number) => {
		gsap.fromTo(
			element,
			{ y: 200, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				delay: index * 0.3,
				duration: 2,
				ease: "power3.inOut",
			}
		);
	};

	const animateExperienceItemText = (
		element: HTMLSpanElement[],
		index: number
	) => {
		gsap.fromTo(
			element,
			{ y: 200, opacity: 0 },
			{ y: 0, delay: 0.5 + index * 0.2, opacity: 1 }
		);
	};

	createEffect(() => {
		if (props.isOpen === true) {
			experienceItemElements.map((element, index) =>
				animateExperienceItem(element, index)
			);
			experienceItemElementText.map((element, index) =>
				animateExperienceItemText(element, index)
			);
		}
	});

	console.log(experienceItemElementText);

	return (
		<div class="flex flex-col items-start gap-y-8">
			<For each={props.experienceContent}>
				{(experienceContent, index) => (
					<li
						ref={(element) => experienceItemElements.push(element)}
						class="list-none experience--li"
					>
						<div class=" flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
							<div
								class={`overflow-hidden flex flex-row items-center`}
							>
								<div
									class={`flex flex-row items-center flex-wrap text-5xl md:text-7xl font-bold text-white`}
								>
									{/* {experienceContent.text} */}
									{/* flex flex-row items-center flex-wrap */}
									<For
										each={experienceContent.text?.split("")}
									>
										{(text) => (
											<span
												class={`h-max`}
												ref={(element) => {
													if (
														!experienceItemElementText[
															index()
														]
													) {
														experienceItemElementText[
															index()
														] = [];
													}
													experienceItemElementText[
														index()
													].push(element!);
												}}
											>
												{text === " " || text === "" ? (
													<span class="mx-1"></span>
												) : (
													text
												)}
											</span>
										)}
									</For>
								</div>
							</div>
							<div
								class={`overflow-hidden flex flex-row items-center`}
							>
								<div
									class={`text-white font-semibold text-xl bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
								>
									{experienceContent.detail}
								</div>
							</div>
						</div>
					</li>
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
