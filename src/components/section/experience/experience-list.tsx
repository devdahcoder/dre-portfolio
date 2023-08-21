import gsap from "gsap";
import { Component, For, createEffect } from "solid-js";
import Folder from "../../../../icon/folder";
import { IExperience } from "../../../../interface";

type Props = {
	experienceContent: IExperience[];
	isOpen: boolean;
};

const animateExperienceItem = (element: HTMLLIElement, index: number, isOpen: boolean) => {
	gsap.fromTo(
		element,
		{ y: isOpen ? 200 : 0, opacity: isOpen ? 0 : 0 },
		{
			y: isOpen ? 0 : 200,
			opacity: isOpen ? 1 : 0,
			delay: index * 0.3,
			duration: 2,
			ease: "power3.out"
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
		{
			y: 0,
			delay: 0.5 + index * 0.2,
			opacity: 1,
			duration: 2.5,
			ease: "power3.out",
		}
	);
};

const animateExperienceDetail = (element: HTMLDivElement, index: number) => {
	gsap.fromTo(
		element,
		{ y: 100, opacity: 0 },
		{
			y: 0,
			delay: index * 0.2,
			opacity: 1,
			duration: 0.5,
			ease: "power2.out",
		}
	);
};

const ExperienceList: Component<Props> = (props: Props) => {
	const experienceItemElements: HTMLLIElement[] = [];
	const experienceItemElementText: HTMLSpanElement[][] = [];
	const experienceDetails: HTMLDivElement[][] = [];

	createEffect(() => {
		if (props.isOpen) {
			experienceItemElements.forEach((element, index) => {
				animateExperienceItem(element, index, props.isOpen);
			});

			experienceItemElementText.forEach((element, index) => {
				animateExperienceItemText(element, index);
			});

		}
	});

	console.log(experienceDetails);
	

	return (
		<div class="experience--list--container">
			<For each={props.experienceContent}>
				{(experienceContent, index) => (
					<li
						ref={(element) => experienceItemElements.push(element)}
						class={`experience--list ${experienceContent.class}`}
					>
						<div class="experience--list--nth--child--container">
							<div class={`experience--list--nth--child--first`}>
								<div
									class={`experience--list--nth--child--second`}
								>
									<For
										each={experienceContent.text?.split("")}
									>
										{(text) => (
											<span
												class={`experience--content--text`}
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
								class={`experience--content-detail--container`}
							>
								<div class={`experience--content--detail`}>
									<For
										each={experienceContent?.detail?.split(
											""
										)}
									>
										{(text) => (
											<div
												ref={(element) => {
													if (
														!experienceDetails[
															index()
														]
													) {
														experienceDetails[
															index()
														] = [];
													} else {
														experienceDetails[
															index()
														].push(element!);
													}
												}}
											>
												{text === " " || text === "" ? (
													<span class="mx-1"></span>
												) : (
													text
												)}
											</div>
										)}
									</For>
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
