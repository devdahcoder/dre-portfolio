import { createEffect, createSignal, onCleanup } from 'solid-js';

type Props = {}

const Time = (props: Props) => {

    const [timeFormat, setTimeFormat] = createSignal<string>("");
	const [timeHour, setTimeHour] = createSignal<number>(0);
	const [timeMinute, setTimeMinute] = createSignal<string>("");

	createEffect(() => {

		const interval = setInterval(() => {

			const getCurrentDay = new Date();

			const getCurrentHour = getCurrentDay.getHours();

			const getCurrentMinute = getCurrentDay.getMinutes();

			const getAmPm = getCurrentHour >= 12 ? "PM" : "AM";

			const getHour = getCurrentHour % 12 || 12;

			let getTwentyFourHour =
				getCurrentHour <= 9
					? `0${getCurrentHour}`
					: `${getCurrentHour}`;

			let getMinute =
				getCurrentMinute <= 9
					? `0${getCurrentMinute}`
					: `${getCurrentMinute}`;

			setTimeFormat(getAmPm);
			setTimeHour(getHour);
			setTimeMinute(getMinute);

		}, 1000);

		onCleanup(() => clearInterval(interval));

    });
    
	return (
	  
		<div class="fixed bottom-5 right-5 pointer-events-none z-50">
			<div class="flex flex-row items-center text-sm animate-pulse text-white">
				{timeHour()}:{timeMinute()} {timeFormat()} GMT, Lagos
			</div>
		</div>
		
	);
	
}

export default Time