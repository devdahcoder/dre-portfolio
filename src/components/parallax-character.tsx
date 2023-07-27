import { Component, For, JSXElement } from "solid-js";
import { render } from "solid-js/web";

interface Props {
	textArray?: string[];
	containerClassName?: string;
	subContainerClassName?: string;
	class?: string;
	hasPageCompletedLoading?: boolean;
	refElement?: HTMLDivElement;
	refElementContainer: HTMLDivElement[];
	render?: JSXElement;
}

const ParallaxCharacter = (props: Props) => {
	return (
		<div
			class={` flex flex-row items-center justify-center ${props.containerClassName}`}
		>
			<div
				class={`overflow-hidden flex flex-row items-center ${props.subContainerClassName}`}
			>
				<For each={props.textArray}>
					{(text, index) => (
						<div
							ref={(element) =>
								(props.refElementContainer[index()] = element!)
							}
							class={`h-max ${props.class}`}
						>
							{props.render ? (
								props.render
							) : text === " " || text === "-" || text === "" ? (
								<span class="mx-1"></span>
							) : (
								text
							)}
						</div>
					)}
				</For>
			</div>
		</div>
	);
};

export default ParallaxCharacter;
