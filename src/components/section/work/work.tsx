import SectionContainer from "../../section-container";
import WorkList from "./work-list";
import "./work.scss";

type Props = {};

const Work = (props: Props) => {
	return (
		<div id={`works`} class={`work--container`}>
			<div class={`work--sub--container`}>
				<div class="work--header--container">
					<div class="work--header--content bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
						<p>Selected Projects</p>
					</div>
				</div>
				<WorkList />
			</div>
		</div>
	);
};

export default Work;
