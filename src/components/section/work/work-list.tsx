import { For } from "solid-js";
import { workContent } from "../../../../content/work-content";
import { IWork } from "../../../../interface";
import WorkItem from "./work-item";

type Props = {};

const WorkList = (props: Props) => {
	return (
		<div class="work--list--container">
			<For each={workContent}>
				{(props, index) => (
					<WorkItem
						index={index()}
						name={props.name}
						detail={props.detail}
						href={props.href}
						id={props.id}
						image={props.image}
					/>
				)}
			</For>
		</div>
	);
};
export default WorkList;
