import { motion } from "framer-motion";
import SectionContainer from "../section-container";
import WorkList from "../work-list";

type Props = {};

const Work = (props: Props) => {
	return (
		<motion.section id={`works`}class={`py-28`}>
			<div
				class={`w-4/5 mt-0 mx-auto flex flex-col items-center gap-y-20 !px-3`}
			>
				<divclass="text-center">
					<divclass="font-bold font-cabinetgrotesk text-3xl bg-gradient-to-tl from-zinc-300 to-gray-500 bg-clip-text text-transparent">
						<p>Selected Projects</p>
					</div>
				</div>
				<WorkList />
			</div>
		</motion.section>
	);
};

export default Work;
