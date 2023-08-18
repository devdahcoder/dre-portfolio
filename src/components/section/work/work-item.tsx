import HeroText from "../../hero-text";
import ImageContainer from "../../image-container";
import ParallaxText from "../../parallax-text";

interface Props {
	index?: number;
	id?: number | string;
	name: string;
	href?: string;
	detail?: string;
	image?: string;
}

const WorkItem = (props: Props) => {
	const projectArrayName = props.name?.split(" ");

	return (
		<div class="work--item--container flex flex-col-reverse items-start text-start justify-start gap-y-10 relative font-cabinetgrotesk">
			<div class="work--item--content--container">
				<div class="w-full max-w-[32rem]">
					<ImageContainer
						imageLink={`${props.image}`}
						class={"h-[340px] md:w-[32rem] rounded-xl"}
					/>
				</div>
				<div class="flex flex-row items-center flex-wrap gap-x-2 relative md:absolute md:-left-36 lg:-left-56 md:top-5 text-4xl sm:text-5xl font-semibold bg-gradient-to-l from-zinc-900 to-gray-100 bg-clip-text text-transparent w-full max-w-[70%] sm:max-w-full">
					{projectArrayName?.map((name: string, index: number) => (
						<ParallaxText
							text={name}
							index={index}
							containerClassName={"w-max"}
						/>
					))}
				</div>
				<div class="hidden md:block relative md:absolute top-5 -right-60 w-full max-w-xs text-lg font-normal text-white">
					<p>{props.detail}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkItem;
