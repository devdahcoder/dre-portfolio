import { workContent } from "../../content/work-content";
import { IWork } from "../../interface";
import WorkItem from "./work-item";

type Props = {};

const WorkList = (props: Props) => {

	return (
		<div
			class="flex flex-col md:items-center gap-y-36 relative"
		>
			{workContent.map((props: IWork, index: number) => {
				const { name, detail, href, id, image } = props;

				return (
					<WorkItem
						index={index}
						name={name}
						detail={detail}
						href={href}
						id={id}
						image={image}
					/>
				);
			})}
		</div>
	);
};

export default WorkList;
