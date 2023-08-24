import "./hero.scss";
import { For } from "solid-js";
import Folder from "../../../../icon/folder";

type Props = {
	text?: string;
	class?: string;
};

const HeroCircleText = (props: Props) => {

	const splitText = props?.text?.split("");

	return (
		<div class="hero--circle--container">
			<a
				href="https://drive.google.com/file/d/1wK5b2CLjJjdySvZ312RRBZu47F-btuE3/view?usp=sharing/"
				target="_blank"
				rel="noopener noreferrer"
				class="hero--circle--link"
			>
				<Folder class="fill-white " />
			</a>
			<div
				class={`hero--circle--text--container`}
			>
				<p>
					<For each={splitText}>
						{(letter, index) => (
							<span
								// class={"hero--circle--text"}
								style={{
									transform: `rotate(${index() * 18.0}deg)`,
									"transform-origin": `0 70px`,
								}}
								class={`hero--circle--text bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
							>
								{letter}
							</span>
						)}
					</For>
				</p>
			</div>
		</div>
	);
};

export default HeroCircleText;
