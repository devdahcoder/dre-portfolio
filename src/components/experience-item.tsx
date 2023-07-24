import ParallaxText from "./parallax-text";
import { Component } from "solid-js";

type Props = {
	index?: number;
	id?: number | string;
	text: string;
	href?: string;
	detail?: string;
};

const ExperienceItem: Component<Props> = (props: Props) => {

	return (
		<li class="list-none experience--li">
			<div class="flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
				<ParallaxText
					index={props.index}
					text={props.text}
					class={`text-5xl md:text-7xl font-bold text-white`}
				/>
				<ParallaxText
					index={props.index}
					text={props.detail}
					class={`font-semibold text-xl bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
				/>
			</div>
		</li>
	);
};

export default ExperienceItem;
