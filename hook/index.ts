// import { useEffect, useState } from "react";

import {createEffect, onCleanup} from "solid-js";

// export const useCursor = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [cursorType, setCursorType] = useState<string>("")

//     useEffect(() => {
//         let isSubscribed = true;

//         const mouseMoveHandler = (event: any) => {
//             const { clientX, clientY } = event;
//             setMousePosition({ x: clientX, y: clientY });
//         };

//         if (isSubscribed) {
//             window.addEventListener("mousemove", mouseMoveHandler);
//         }

//         return () => {
//             isSubscribed = false;
//             window.removeEventListener("mousemove", mouseMoveHandler);
//         };
//     }, []);

//     return { mousePosition, cursorType, setCursorType };
// }

// export const elementObserver = (
//     ElementRef: HTMLElement | HTMLDivElement | HTMLSpanElement,
//     animationFunction: () => void,
//     entriesCallbackFunction: (entry: IntersectionObserverEntry) => void
// ) => {
//     createEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => entriesCallbackFunction(entry));
//             },
//             { threshold: 0.2 }
//         ); // Adjust the threshold as needed for the intersection area
//
//         observer.observe(ElementRef);
//
//         onCleanup(() => {
//             observer.disconnect(); // Clean up the observer when the component unmounts
//         });
//     });
// };

export const elementObserver = (
    ElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined | any,
    entriesCallbackFunction: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
    options?: IntersectionObserverInit // Optional IntersectionObserver options
) => {
    if (!ElementRef) {
        return; // Do nothing if ElementRef is not valid
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => entriesCallbackFunction(entry, observer));
        },
        options || {threshold: 0.2} // Use provided options or default threshold
    );

    observer.observe(ElementRef);

    onCleanup(() => {
        observer.disconnect();
    });

};