import gsap from "gsap";
import { For, Setter, Show, createSignal, onMount } from "solid-js";
import CircleText from "./hero-cirlcle-text";
import HeroText from "./hero-text";
import "./hero.scss";

type Props = {
	cursorType?: string;
	hasPageCompletedLoading?: boolean;
	setCursorType?: Setter<string>;
};

const Hero = (props: Props) => {

	const heroNameElement: HTMLSpanElement[][] = [];
	const heroNameContainerElement: HTMLDivElement[] = [];
	const heroTextElement: HTMLDivElement[] = [];
	const [name] = createSignal<string[]>(["Damilare", "Adigun"]);
	const [heroText, setHeroText] = createSignal(
		// "Experienced Product & Interaction Designer with a track record of over three years, adept at problem-solving fueled by a cup of coffee, situated in the vibrant city of Lagos. Proficient in crafting solutions for diverse domains including SaaS, Healthcare, E-commerce, and Web3.0. Presently, I contribute my skills within a dynamic Product team at"
		"Product & Interaction Designer with over three years of experience solving problems with a cup of coffee somewhere in Lagos. designing for Saas, Healthcare, E-commerce & Web3.0. Currently, I work in a Product team at"
	);

	onMount(() => {
		heroNameContainerElement.forEach((element, index) => {
			gsap.fromTo(
				element,
				{ yPercent: 100 },
				{
					yPercent: 0,
					duration: 2,
					delay: 0.2 + index * 0.3,
					ease: "power3.out"
				}
			);
		});
		heroTextElement.forEach((element, index) => {
			gsap.fromTo(element, {yPercent: 200, opacity: 0, rotate: "10deg"},
                {yPercent: 0, duration: 2.5, delay: 0.01 + index * 0.01, opacity: 1, rotate: "0deg", ease: "power3.out"})
		})
	});

	return (
		<section class={`hero--section`}>
			<div class={`hero--sub--section`}>
				{/* text-[16vw] sm:text-[13vw] md:text-[10.7vw] */}
				<div class="hero--name--container font-cabinetgrotesk">
					<For each={name()}>
						{(text: string, index) => (
							<div
								ref={(element: HTMLDivElement) =>
									heroNameContainerElement.push(element)
								}
								class="hero--name--sub--container"
							>
								<div class="hero--name--span--container">
									<For each={text?.split(" ")}>
										{(text) => (
											<div
												ref={(element) => {
													if (
														!heroNameElement[
															index()
														]
													) {
														heroNameElement[
															index()
														] = [];
													}

													heroNameElement[
														index()
													].push(element);
												}}
												class="hero--name"
											>
												{text}
											</div>
										)}
									</For>
								</div>
							</div>
						)}
					</For>
				</div>

				<div class="hero--text--container">
					<div class="hero--text--sub--container bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent">
						<For each={heroText().split(" ")}>
							{(props, index) => (
								<div class={`hero--text`}>
									<div ref={(element) => heroTextElement.push(element)} class={`text-white`}>
										{props}
										<Show
											when={
												props.toLowerCase() === "at"
											}
										>
											<span class="ml-1">
												<a
													href="https://www.shawn.exchange/"
													target="_blank"
													rel="noopener noreferrer"
													class=" text-orange-500 no-underline"
												>
													ShawnExchange
												</a>
											</span>
										</Show>
									</div>
								</div>
							)}
						</For>
					</div>

					<CircleText text={"- Download - Resume"} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
