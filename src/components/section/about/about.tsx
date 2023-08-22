import Wave from "../../../../icon/wave";
import ImageContainer from "../../image-container";
import Video from "../../video";
import "./about.scss";
import { ScrollTrigger } from "gsap/all";

type Props = {
	// cursorType: string;
	// setCursorType: React.Dispatch<React.SetStateAction<string>>;
	// videoRef?: React.MutableRefObject<HTMLVideoElement>;
	// handleVideoPlay: () => void;
};

const About = (props: Props) => {
	return (
		<section id="about" class="about--section">
			<div class="about--sub--container">
				<div class="about--header--container bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
					<p>About</p>
				</div>

				<div
					class={`flex flex-col lg:flex-row px-3 items-center lg:items-start justify-center gap-x-0 md:gap-x-16 lg:gap-x-28 gap-y-20 
				lg:gap-y-0 `}
				>
					<div class="flex flex-col w-full max-w-[32rem] gap-y-12">
						<Video
							// videoRef={videoRef}
							src={`./video/dre.mp4`}
							type={`video/mp4`}
							muted={true}
							loop={true}
							autoPlay={true}
							class={"h-[340px] rounded-lg"}
							// cursorType={cursorType}
							// setCursorType={setCursorType}
							// onClick={handleVideoPlay}
						/>
					</div>

					<div
						class="flex flex-col gap-y-6 w-11/12 sm:w-[28rem] lg:w-[24rem] 
                "
					>
						{/* <div class="text-3xl sm:text-5xl font-bold font-cabinetgrotesk text-white">
						<p>Damilare Adigun</p>
					</div> */}
						<div class="flex flex-col text-base font-medium gap-y-8 text-white">
							<div class="flex flex-row items-center gap-x-2 tracking-widest-[0.5rem]">
								<p>Hello</p>
								<span>
									<Wave />
								</span>
							</div>

							<div>
								<p class="tracking-[0.07rem] leading-6">
									I am a Product Designer with over two years
									of experience designing for Saas,
									Healthcare, E-commerce, Ed-tech, Logistics
									and I'm currently testing Extended
									Realities.
								</p>
							</div>

							<div>
								<p class="tracking-[0.07rem] leading-6">
									I have contributed to the launching of
									several Early-Stage Products as a Freelancer
									from MVP to Lead-Generating Platforms. I
									collaborate and work with Brilliant Minds to
									implement User Research, Competitor
									Analysis, Wireframes, Sketches, Design
									Systems, Dashboards, Mobile and Web
									Applications.
								</p>
							</div>
							<div>
								<p class="tracking-[0.07rem] leading-6">
									.........and I love Coffee ☕
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
