import gsap from "gsap";
import { createSignal } from "solid-js";

interface Props {}

type htmlDivElementRef =
	| HTMLDivElement
	| ((el: HTMLDivElement) => void)
	| undefined
	| any;

const animateAnchorRefOne = (
	element: HTMLAnchorElement,
	hoverContactAnchor: boolean
) => {
	gsap.fromTo(
		element,
		{
			yPercent: hoverContactAnchor ? 0 : -100,
			opacity: hoverContactAnchor ? 1 : 0,
			ease: "power1.out",
			transform: "rotate3d(0)",
			transformStyle: "preserve-3d",
		},
		{
			// yPercent: hoverContactAnchor ? -100 : 0,
			opacity: hoverContactAnchor ? 0 : 1,
			duration: 0.4,
			transform: "rotate3d(1, 0, 0, 1turn)",
			transformStyle: "preserve-3d",
		}
	);
};

const animateAnchorRefTwo = (
	element: HTMLAnchorElement,
	hoverContactAnchor: boolean
) => {
	gsap.fromTo(
		element,
		{
			yPercent: hoverContactAnchor ? 0 : -100,
			duration: 1,
			ease: "power1.out",
			// transform: "transform: rotate3d(1, 0, 0, -1turn)",
			transformStyle: "preserve-3d",
		},
		{
			yPercent: hoverContactAnchor ? -100 : 0,
			// transform: "rotate3d(0)",
			transformStyle: "preserve-3d",
		}
	);
};

const ContactLink = (props: Props) => {
	let contactAnchorRefOne:
		| HTMLAnchorElement
		| ((el: HTMLAnchorElement) => void)
		| undefined
		| any;
	let contactAnchorRefTwo:
		| HTMLAnchorElement
		| ((el: HTMLAnchorElement) => void)
		| undefined
		| any;
	let contactAnchorBorderTop: htmlDivElementRef;
	let contactAnchorBorderRight: htmlDivElementRef;
	let contactAnchorBorderBottom: htmlDivElementRef;
	let contactAnchorBorderLeft: htmlDivElementRef;

	const [hoverContactAnchor, setHoverContactAnchor] =
		createSignal<boolean>(false);

	const mouseHoverTriggerAnchorRef = () => {
		setHoverContactAnchor(true);
		animateAnchorRefOne(contactAnchorRefOne, hoverContactAnchor());
		animateAnchorRefTwo(contactAnchorRefTwo, hoverContactAnchor());
		gsap.fromTo(
			contactAnchorBorderTop,
			{ width: 0, display: "none" },
			{
				width: "100%",
				display: "block",
				duration: 0.8,
				ease: "power3.out",
			}
		);
		gsap.fromTo(
			contactAnchorBorderRight,
			{ height: 0, display: "none" },
			{
				height: "100%",
				display: "block",
				duration: 0.8,
				ease: "power3.out",
			}
		);
		gsap.fromTo(contactAnchorBorderBottom, { width: 0 }, { width: "100%" });
		gsap.fromTo(
			contactAnchorBorderLeft,
			{ height: 0, display: "none" },
			{
				height: "100%",
				display: "block",
				duration: 0.8,
				ease: "power3.out",
			}
		);
	};

	const mouseOutTriggerAnchorRef = () => {
		setHoverContactAnchor(false);
		animateAnchorRefOne(contactAnchorRefOne, hoverContactAnchor());
		animateAnchorRefTwo(contactAnchorRefTwo, hoverContactAnchor());
		gsap.fromTo(contactAnchorBorderTop, { width: "100%" }, { width: 0 });
		gsap.fromTo(
			contactAnchorBorderRight,
			{ height: "100%" },
			{ height: 0 }
		);
		gsap.fromTo(contactAnchorBorderBottom, { width: "100%" }, { width: 0 });
		gsap.fromTo(contactAnchorBorderLeft, { height: "100%" }, { height: 0 });
	};

	return (
		<div
			onMouseEnter={mouseHoverTriggerAnchorRef}
			onMouseLeave={mouseOutTriggerAnchorRef}
			class="contact--link--container"
		>
			{/* <div
				class="contact--link--border"
				ref={contactAnchorBorderTop}
			></div>
			<div
				class="contact--link--border"
				ref={contactAnchorBorderRight}
			></div>
			<div
						class="contact--link--border"
						ref={contactAnchorBorderBottom}
					></div>
			<div
				class="contact--link--border"
				ref={contactAnchorBorderLeft}
			></div> */}
			<a
				ref={contactAnchorRefOne}
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				class="contact--link"
			>
				Book a call
			</a>
			<a
				ref={contactAnchorRefTwo}
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				class="contact--link"
			>
				Book a call
			</a>
		</div>
	);
};

export default ContactLink;
