import {Component, For, JSXElement} from "solid-js";
import "./header.scss";
import HeaderNavigationCharacter from "./header-navigation-character";

type Props = {
    style?: {};
    index: number;
    href?: string;
    text?: string;
    class?: string;
    icon?: JSXElement;
    id: string | number;
    containerClassName?: string;
    linkContainers: HTMLSpanElement[][];
    anchorBorderElements: HTMLDivElement[];
    triggerAnchorAnimation: (index: number) => void;
    triggerOpenAnchorBorderAnimation: (index: number) => void;
    triggerCloseAnchorBorderAnimation: (index: number) => void;
};

const HeaderNavigationItemLink: Component<Props> = (props) => {
    return (
        <div class={`header--social--media--item--container`}>
            <a
                onMouseEnter={() => {
                    props.triggerAnchorAnimation(props.index);
                    props.triggerOpenAnchorBorderAnimation(props.index);
                }}
                onMouseLeave={() =>
                    props.triggerCloseAnchorBorderAnimation(props.index)
                }
                href={`${props.href}`}
                target="_blank"
                rel="noopener noreferrer"
                style={props.style}
                class={`header--social--media--item--link`}
            >
                <HeaderNavigationCharacter
                    index={props.index}
                    character={props.text?.split(" ")}
                    linkContainers={props.linkContainers}
                    subContainerClass={"header--social--media--navigation--link--text"}
                    containerClass={"header--social--media--navigation--link--text--container"}
                />
            </a>
        </div>
    );
};

export default HeaderNavigationItemLink;
