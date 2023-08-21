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
		<div class="work--item--container">
			<div class="work--item--content--container">
				<div class="work--item--content--image--container">
					<ImageContainer
						imageLink={`${props.image}`}
						class={"work--item--image"}
					/>
				</div>

				<div class="work--item--content--text--header--container font-semibold bg-gradient-to-l from-zinc-900 to-gray-100 bg-clip-text text-transparent">
					{projectArrayName?.map((name: string, index: number) => (
						<ParallaxText
							text={name}
							index={index}
							containerClassName={"w-max"}
						/>
					))}
				</div>

				<div class="work--item--content--text--container bg-gradient-to-b from-slate-600 to-slate-300 bg-clip-text text-transparent">
					<p>{props.detail}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkItem;
