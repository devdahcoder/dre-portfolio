import "./header.scss";
import gsap from "gsap";
import {NAVIGATION_TYPE} from "../../../../enum";
import {Component, createEffect, For, Show} from "solid-js";
import {IHeaderNavigationLink} from "../../../../interface";
import HeaderNavigationItemLink from "./header-navigation-item-link";
import HeaderNavigationItemStaticLink from "./header-navigation-item-static-link";

type Props = {
    isOpen: boolean;
    navigation: IHeaderNavigationLink[];
};

const resetAnchor = (element: HTMLElement) => {
    gsap.to(element, {
        scale: 1,
        duration: 0.1,
        color: "#FFFFFF",
    });
};

const openAnchorBorder = (element: HTMLElement) => {
    gsap.fromTo(
        element,
        {
            width: "0px",
        },
        {
            duration: 0.4,
            width: "100%",
        }
    );
};

const closeAnchorBorder = (element: HTMLElement) => {
    gsap.to(element, {
        duration: 0.4,
        width: "0px",
        ease: "bounce.out",
    });
};

const animateAnchor = (element: HTMLElement, index: number) => {
    gsap.fromTo(
        element,
        {scale: 1, color: "#ffffff"},
        {
            scale: 1.2,
            duration: 0.1,
            delay: 0.1 + index * 0.1,
            color: "#F96F21",
            onComplete: () => {
                resetAnchor(element);
            },
        }
    );
};

const animateAnchorSection = (elements: HTMLElement[], index: number) => {
    gsap.fromTo(
        elements,
        {
            opacity: 0,
            yPercent: 100,
        },
        {
            opacity: 1,
            delay: 0.1 + index * 0.2,
            yPercent: 0,
            duration: 1,
            ease: "power2.out"
        }
    );
};

const HeaderNavigationList: Component<Props> = (props: Props) => {

    const linkContainers: HTMLSpanElement[][] = [];
    const anchorBorderElements: HTMLDivElement[] = [];

    const triggerOpenAnchorBorderAnimation = (index: number) => {
        openAnchorBorder(anchorBorderElements[index]);
    };

    const triggerCloseAnchorBorderAnimation = (index: number) => {
        closeAnchorBorder(anchorBorderElements[index]);
    };

    const triggerAnchorAnimation = (index: number) => {
        linkContainers[index].forEach(
            (element: HTMLSpanElement, idx: number) => {
                animateAnchor(element, idx);
            }
        );
    };

    createEffect(() => {
        if (props.isOpen) {
            linkContainers.forEach((refElement, index) => {
                animateAnchorSection(refElement, index);
            });
        }
    })

    return (
        <div class="header--navigation--list--container">
            <For each={props.navigation}>
                {(props, index) => (
                    <>
                        <Show when={props.type === NAVIGATION_TYPE.LINK}>
                            <HeaderNavigationItemLink
                                id={props.id}
                                index={index()}
                                href={props.href}
                                icon={props.icon}
                                text={props.text}
                                class={props.class}
                                style={props.style}
                                linkContainers={linkContainers}
                                anchorBorderElements={anchorBorderElements}
                                containerClassName={props.containerClassName}
                                triggerAnchorAnimation={triggerAnchorAnimation}
                                triggerOpenAnchorBorderAnimation={triggerOpenAnchorBorderAnimation}
                                triggerCloseAnchorBorderAnimation={triggerCloseAnchorBorderAnimation}
                            />
                        </Show>
                        <Show when={props.type === NAVIGATION_TYPE.STATIC}>
                            <HeaderNavigationItemStaticLink
                                id={props.id}
                                index={index()}
                                href={props.href}
                                icon={props.icon}
                                text={props.text}
                                class={props.class}
                                style={props.style}
                                linkContainers={linkContainers}
                                anchorBorderElements={anchorBorderElements}
                                containerClassName={props.containerClassName}
                                triggerAnchorAnimation={triggerAnchorAnimation}
                                triggerOpenAnchorBorderAnimation={triggerOpenAnchorBorderAnimation}
                                triggerCloseAnchorBorderAnimation={triggerCloseAnchorBorderAnimation}
                            />
                        </Show>
                    </>
                )}
            </For>
        </div>
    );
};

export default HeaderNavigationList;
