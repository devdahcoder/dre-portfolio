import { Setter, createSignal } from "solid-js";
import CircleText from "../cirlcle-text";
import HeroText from "../hero-text";
import NameRender from "../name-render";
import SectionContainer from "../section-container";

type Props = {
	cursorType: string;
	hasPageCompletedLoading?: boolean;
	setCursorType: Setter<string>;
};

const Hero = (props: Props) => {
	const [firstName, setFirstName] = createSignal<Array<string>>([
		"D",
		"a",
		"m",
		"i",
		"l",
		"a",
		"r",
		"e",
	]);
	const [lastName, setLastName] = createSignal<Array<string>>([
		"A",
		"d",
		"i",
		"g",
		"u",
		"n",
	]);
	const [heroText, setHeroText] = createSignal(
		"Product & Interaction Designer with over three years of experience solving problems with a cup of coffee somewhere in Lagos. designing for Saas, Healthcare, E-commerce & Web3.0. Currently, I work in a Product team at ShawnExchange"
	);

	const heroTextArray = heroText().split(" ");

	return (
		<section class={`snap--section py-24 h-screen`}>
			<div
				class={`flex flex-col gap-y-5 md:gap-y-10 w-11/12 md:w-4/5 mt-0 mx-auto`}
			>
				<div
					class="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 gap-x-8 text-justify text-[16vw] sm:text-[13vw] md:text-[10.7vw] leading-[1] md:leading-[0.7] font-extrabold 
					font-cabinetgrotesk text-white after:inline-block after:w-full"
				>
					<NameRender
						textArray={firstName}
						delay={0.1}
						class={`md:my-5`}
						hasPageCompletedLoading={hasPageCompletedLoading}
					/>
					<NameRender
						textArray={lastName}
						delay={0.2}
						class={`md:my-5`}
						hasPageCompletedLoading={hasPageCompletedLoading}
					/>
				</div>

				<div class="flex flex-col md:flex-row justify-between gap-y-12">
					<div
						class="flex flex-row flex-wrap gap-x-2 items-center text-lg font-medium w-4/5 md:w-2/4 bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent"
					>
						{heroTextArray?.map((text: string, index: number) => (
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
						))}
					</div>

					<CircleText
						text={"- Download - Resume"}
						cursorType={cursorType}
						setCursorType={setCursorType}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
