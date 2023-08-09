import { Component } from "solid-js";

type Props = {
	index?: number;
	id?: number | string;
	text: string;
	href?: string;
	detail?: string;
	experienceItemElements: HTMLLIElement[];
};

const ExperienceItem: Component<Props> = (props: Props) => {

	return (
		<li ref={(element) => props.experienceItemElements.push(element)} class="list-none experience--li">
			<div class="flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
				<div class={`overflow-hidden flex flex-row items-center`}>
					<div class={`text-5xl md:text-7xl font-bold text-white`}>
						{props.text}
					</div>
				</div>
				<div class={`overflow-hidden flex flex-row items-center`}>
					<div
						class={`text-white font-semibold text-xl bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
					>
						{props.detail}
					</div>
				</div>
			</div>
		</li>
	);
};

export default ExperienceItem;
