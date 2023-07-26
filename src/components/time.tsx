import gsap from "gsap";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { getCurrentTime } from "../../helper/getCurrentTime";

interface Props {};

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
	const [timeSecond, setTimeSecond] = createSignal<number>(0);

	const addTimeAnimation = () => {
		gsap.fromTo(
			timeContainerRef,
			{ yPercent: 100 },
			{ yPercent: 0, duration: 1, ease: "power1.out", delay: 0.1 }
		);
	}

	const removeTimeAnimation = () => {
		gsap.fromTo(
			timeContainerRef,
			{ yPercent: 0 },
			{ yPercent: -100, duration: 1, ease: "power1.out" }
		);

	}

	createEffect(() => {
		const interval = setInterval(() => {
			const { timeFormat, timeHour, timeMinute, timeSecond } = getCurrentTime();
			// Remove current timeMinute number
			if (timeSecond == 59) {
				removeTimeAnimation();
			}
			setTimeFormat(timeFormat);
			setTimeHour(timeHour);
			setTimeMinute(timeMinute);
			setTimeSecond(timeSecond);
			console.log(timeSecond);
		}, 1000);

		onCleanup(() => clearInterval(interval));
	});

	createEffect(() => {

		// When time in minutes changes 
		timeMinute();
	
		// Add new minute number
		addTimeAnimation();
		
	})

	return (
		<div class="fixed bottom-5 right-5 pointer-events-none z-50">
			<div class="flex flex-row items-center text-sm animate-pulse bg-gradient-to-r from-slate-300 to-neutral-500 bg-clip-text text-transparent">
				<div class="">
					<span>{timeHour()}</span>
				</div>
				:{" "}
				<div class="overflow-hidden h-5">
					<div
						ref={timeContainerRef}
						class="bg-gradient-to-r from-slate-300 to-neutral-500 bg-clip-text text-transparent"
					>
						{timeMinute()}
					</div>
				</div>{" "}
				<div>
					<span>{timeFormat()}</span>
				</div>{" "}
				<div class="ml-1">
					<span>GMT, Lagos, Nigeria.</span>
				</div>
			</div>
		</div>
	);
};

export default Time;
