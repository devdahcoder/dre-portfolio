import {Component, For} from "solid-js";

interface Props {
    name: string[];
    heroNameElement:  HTMLSpanElement[][];
    heroNameContainerElement: HTMLDivElement[];
};
const HeroName: Component<Props> = (props: Props) => {

    return (<For each={props.name}>
        {(text: string, index) => (
            <div
                ref={(element: HTMLDivElement) =>
                    props.heroNameContainerElement.push(element)
                }
                class="hero--name--sub--container"
            >
                <div class="hero--name--span--container">
                    <For each={text?.split(" ")}>
                        {(text) => (
                            <div
                                ref={(element) => {
                                    if (
                                        !props.heroNameElement[
                                            index()
                                            ]
                                    ) {
                                        props.heroNameElement[
                                            index()
                                            ] = [];
                                    }

                                    props.heroNameElement[
                                        index()
                                        ].push(element);
                                }}
                                class="hero--name"
                            >
                                {text}
                            </div>
                        )}
                    </For>
                </div>
            </div>
        )}
    </For>)

}

export default HeroName;