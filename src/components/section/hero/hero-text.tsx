import {Component, For, JSXElement, Show} from "solid-js";

interface Props {
	heroText: string[];
	heroTextElement: HTMLDivElement[];
}

const HeroText: Component<Props> = (props: Props) => {
	return (
		<div class="hero--text--sub--container bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
			<For each={props.heroText}>
				{(text, index) => (
					<div class={`hero--text`}>
						<div ref={(element) => props.heroTextElement.push(element)} class={`text-white`}>
							{text}
							<Show
								when={
									text.toLowerCase() === "at"
								}
							>
								<span class="ml-1">
									<a
										href="https://www.shawn.exchange/"
										target="_blank"
										rel="noopener noreferrer"
										class=" text-orange-500 no-underline"
									>
										ShawnExchange
									</a>
								</span>
							</Show>
						</div>
					</div>
				)}
			</For>
		</div>

	);
};

export default HeroText;
