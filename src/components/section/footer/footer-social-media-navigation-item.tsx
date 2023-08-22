import "./footer.scss";
import {IStyle} from "../../../../interface";
import {Component, For, JSXElement} from "solid-js"

type Props = {
    index: number;
    href?: string;
    text?: string;
    class?: string;
    style?: IStyle;
    icon?: JSXElement;
    id: string | number;
    renderLink?: JSXElement;
    containerClassName?: string;
    linkContainers: HTMLSpanElement[][];
    anchorBorderElements: HTMLDivElement[];
    triggerAnchorAnimation: (index: number) => void;
    triggerOpenAnchorBorderAnimation: (index: number) => void;
    triggerCloseAnchorBorderAnimation: (index: number) => void;
};

const FooterSocialMediaNavigationItem: Component<Props> = (props) => {
    return (
        <div class={`flex flex-row items-center ${props.containerClassName}`}>
            <a
                onMouseEnter={() => {
                    props.triggerAnchorAnimation(props.index);
                    props.triggerOpenAnchorBorderAnimation(props.index);
                }}
                onMouseLeave={() =>
                    props.triggerCloseAnchorBorderAnimation(props.index)
                }
                href={`https://${props.href}`}
                target="_blank"
                rel="noopener noreferrer"
                style={props.style?.style}
                class={`footer--social--media--navigation--link ${props.class}`}
            >
                <For each={props.text?.split("")}>
                    {(text) => (
                        <span
                            class={`footer--social--media--navigation--link--text--container h-max`}
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
                                (<span class="footer--social--media--navigation--link--text mx-1"></span>)
                                :
                                (text)
                            }
                        </span>)
                    }
                </For>

                <div
                    ref={(element) => (props.anchorBorderElements[props.index] = element!)}
                    class="footer--social--media--navigation--link--border"
                ></div>
            </a>
        </div>
    );
};

export default FooterSocialMediaNavigationItem;
