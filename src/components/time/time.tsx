import gsap from "gsap";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { getCurrentTime } from "../../../helper/getCurrentTime";
import "./time.scss";

interface Props {}

const addTimeAnimation = (element: HTMLDivElement) => {
	gsap.fromTo(
		element,
		{
			yPercent: 100,
			transform: "rotateX(80deg)",
			transformStyle: "preserve-3d",
		},
		{
			yPercent: 0,
			duration: 1,
			ease: "power1.out",
			transform: "rotateX(0deg)",
			transformStyle: "preserve-3d",
		}
	);
};

const removeTimeAnimation = (element: HTMLDivElement) => {
	gsap.fromTo(
		element,
		{ yPercent: 0 },
		{ yPercent: -100, duration: 1, ease: "power1.out" }
	);
};

const Time = (props: Props) => {
	let timeContainerRef:
		| gsap.TweenTarget
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| any
		| undefined;

	const [timeFormat, setTimeFormat] = createSignal<string>("");
	const [timeHour, setTimeHour] = createSignal<number>(0);
	const [timeMinute, setTimeMinute] = createSignal<string>("");

	createEffect(() => {
		const interval = setInterval(() => {
			const { timeFormat, timeHour, timeMinute, timeSecond } =
				getCurrentTime();
			// Remove current timeMinute number
			if (timeSecond == 59) {
				removeTimeAnimation(timeContainerRef);
			}
			setTimeFormat(timeFormat);
			setTimeHour(timeHour);
			setTimeMinute(timeMinute);
		}, 1000);

		onCleanup(() => clearInterval(interval));
	});

	createEffect(() => {
		// When time in minutes changes
		timeMinute();

		// Add new minute number
		addTimeAnimation(timeContainerRef);
	});

	return (
		<div class="time--container">
			<div class="time--sub--container">
				<div class="">
					<span>{timeHour()}</span>
				</div>
				:{" "}
				<div class="time--content--container">
					<div ref={timeContainerRef} class="">
						{timeMinute()}
					</div>
				</div>{" "}
				<div>
					<span>{timeFormat()}</span>
				</div>{" "}
				<div class="time--location--container">
					<span>GMT, Lagos, Nigeria.</span>
				</div>
			</div>
		</div>
	);
};

export default Time;
