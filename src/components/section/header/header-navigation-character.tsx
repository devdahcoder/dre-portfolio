import "./header.scss";
import {Component, For} from "solid-js"

type Props = {
    index: number;
    character: string[] | undefined;
    containerClass?: string | undefined;
    linkContainers: HTMLSpanElement[][];
    subContainerClass?: string | undefined;
}

const HeaderNavigationCharacter: Component<Props> = (props: Props) => {

    return (
        <For each={props.character}>
            {(text) => (
                <span
                    class={`${props.containerClass}`}
                    ref={(element) => {
                        if (!props.linkContainers[props.index]) {
                            props.linkContainers[props.index] = [];
                        }
                        props.linkContainers[props.index].push(element!);
                    }}
                >
                    {text === " " ||
                    text === "-" ||
                    text === "" ?
                        (<span class={`${props.subContainerClass} mx-1`}></span>)
                        :
                        (text)
                    }
                </span>)
            }
        </For>
    )

}


export default HeaderNavigationCharacter;