import { For, Setter, createSignal, onMount } from "solid-js";
import CircleText from "../../cirlcle-text";
import HeroText from "../../hero-text";
import NameRender from "../../name-render";
import SectionContainer from "../../section-container";
import "./hero.scss";
import gsap from "gsap";

type Props = {
	cursorType?: string;
	hasPageCompletedLoading?: boolean;
	setCursorType?: Setter<string>;
};

const Hero = (props: Props) => {
	let heroNameContainerElement: HTMLDivElement[] = [];
	let heroNameElement: HTMLSpanElement[][] = [];
	const [name] = createSignal<string[]>(["Damilare", "Adigun"]);

	const [heroText, setHeroText] = createSignal(
		"Product & Interaction Designer with over three years of experience solving problems with a cup of coffee somewhere in Lagos. designing for Saas, Healthcare, E-commerce & Web3.0. Currently, I work in a Product team at ShawnExchange"
	);

	const heroTextArray = heroText().split(" ");

	onMount(() => {
		heroNameContainerElement.forEach((element, index) => {
			gsap.fromTo(
				element,
				{ y: 300 },
				{
					y: 0,
					duration: 1.5,
					delay: 0.2 + index * 0.3,
					// onComplete: () => {
					// 	heroNameElement[index].forEach((element, index) => {
					// 		gsap.fromTo(
					// 			element,
					// 			{
					// 				y: 90,
					// 				opacity: 0,
					// 				ease: "power3.out",
					// 				duration: 1,
					// 			},
					// 			{
					// 				y: 0,
					// 				duration: 1,
					// 				delay: 0.2 + index * 0.3,
					// 				opacity: 1,
					// 				ease: "power3.out",
					// 			}
					// 		);
					// 	});
					// },
				}
			);
		});
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
						{/* {heroTextArray?.map((text: string, index: number) => (
							<div key={index}>
								{text.toLowerCase() !== "shawnexchange" && (
									<HeroText
										key={index}
										index={index}
										text={text}
										containerClassName={"w-max"}
										hasPageCompletedLoading={
											hasPageCompletedLoading
										}
									/>
								)}
								{text.toLowerCase() === "shawnexchange" && (
									<HeroText
										key={index}
										index={index}
										containerClassName={"w-max"}
										hasPageCompletedLoading={
											hasPageCompletedLoading
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
									</HeroText>
								)}
							</div>
						))} */}
					</div>

					{/* <CircleText
						text={"- Download - Resume"}
						cursorType={cursorType}
						setCursorType={setCursorType}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
