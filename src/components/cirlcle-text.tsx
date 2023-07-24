import { motion } from "framer-motion";
import Folder from "../../icon/folder";

type Props = {
	text?: string;
	class?: string;
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const CircleText = (props: Props) => {
	const { text, class, cursorType, setCursorType } = props;

	const splitText = text?.split("");

	return (
		<div
			class="w-fit h-fit relative"
		>
			<a
				onMouseEnter={() => setCursorType("hover--link")}
				onMouseLeave={() => setCursorType("")}
				href="https://drive.google.com/file/d/1wK5b2CLjJjdySvZ312RRBZu47F-btuE3/view?usp=sharing/"
				target="_blank"
				rel="noopener noreferrer"
				class="z-10 flex flex-row items-center justify-center select-none absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
			>
				<Folder class="fill-white " />
			</a>
			<div
				class={`
            rounded-full text-center font-inter animate-spin-slow 
            h-36 
            w-36 ${class}`}
			>
				<p>
					{splitText?.map((letter, index) => {
						return (
							<span
								key={index}
								style={{
									transform: `rotate(${index * 18.0}deg)`,
									transformOrigin: `0 70px`,
								}}
								class={`text-base z-0 absolute left-1/2 font-inter bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
								
							>
								{letter}
							</span>
						);
					})}
				</p>
			</div>
		</div>
	);
};

export default CircleText;
