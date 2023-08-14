import { JSXElement } from 'solid-js';
import { NAVIGATION_TYPE } from './../enum/index';

export interface IStyle {
    style?: string | { [name: string]: any }
}

export interface IGetTime {
    timeFormat: string;
    timeHour: number;
    timeMinute: string;
    timeSecond: number;
}

export interface IWork {
    id?: number | string;
    name: string;
    href?: string;
    detail?: string;
    image?: string;
}

export interface IExperience {
    id?: number | string;
    index?: number;
    text: string;
    href?: string;
    detail?: string;
}

export interface IHeaderSocialMediaLink {
    id: string | number;
    href?: string;
    text?: string;
    class?: string;
    style?: IStyle;
    icon?: JSXElement;
    containerClassName?: string;
    type: NAVIGATION_TYPE;
}

export interface IHeaderNavigationLink extends IHeaderSocialMediaLink { };

type htmlDivElementRef =
    | HTMLDivElement
    | ((el: HTMLDivElement) => void)
    | undefined
    | any;

export interface IContactLink {

    id: number;
    text: string;
    class: string;
    href: string;
    target: string;
    rel: string;

}