import {Component, JSXElement} from "solid-js";
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

}

const HeaderNavigationItemStaticLink: Component<Props> = (props: Props) => {

    return (
        <div
            onMouseEnter={() => {
                props.triggerAnchorAnimation(props.index);
                props.triggerOpenAnchorBorderAnimation(props.index);
            }}
             onMouseLeave={() =>
                 props.triggerCloseAnchorBorderAnimation(props.index)
             }
            class="header--section--navigation--item--container"
        >
                <HeaderNavigationCharacter
                    index={props.index}
                    character={props.text?.split(" ")}
                    linkContainers={props.linkContainers}
                    subContainerClass={"header--section--navigation--link--text"}
                    containerClass={"header--section--navigation--link--text--container"}
                />

        </div>
    )

}

export default HeaderNavigationItemStaticLink;