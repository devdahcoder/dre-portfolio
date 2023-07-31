// import { useEffect, useState } from "react";

import { createEffect, onCleanup } from "solid-js";

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

export const elementObserver = (
    sectionElementRef: HTMLDivElement,
    animationFunction: () => void
) => {
    createEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animationFunction(); // Call the animation function when the section is in view
                        observer.unobserve(entry.target); // Stop observing once the section is in view (if you only want it to trigger once)
                    }
                });
            },
            { threshold: 0.2 }
        ); // Adjust the threshold as needed for the intersection area

        observer.observe(sectionElementRef);

        onCleanup(() => {
            observer.disconnect(); // Clean up the observer when the component unmounts
        });
    });
};