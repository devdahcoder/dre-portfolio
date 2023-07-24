import { AnimationControls, TargetAndTransition, VariantLabels, motion } from "framer-motion";
import { JSXElement } from "solid-js";

type Props = {
	text?: string;
	index?: number;
	containerClassName?: string;
	class?: string;
	children?: JSXElement;
	delay?: number | undefined;
	hasPageCompletedLoading?: boolean;
	animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition | undefined
};

const HeroText = (props: Props) => {
	const {
		index,
		text,
		class,
		containerClassName,
		children,
		delay,
		hasPageCompletedLoading,
	} = props;
	const textContext = {
		hidden: {
			y: "100%",
			opacity: 0,
		},
		visible: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: index * (delay ?? 0.03),
				ease: "easeInOut",
			},
		}),
	};

	return (
		<>
			<div
				class={`overflow-hidden flex flex-row items-center ${containerClassName}`}
			>
				<motion.div
					custom={index}
					variants={textContext}
					initial="hidden"
					animate={hasPageCompletedLoading && "visible"}
					viewport={{ once: true }}
					class={`text-white ${class}`}
				>
					{text}
					{children}
				</motion.div>
			</div>
		</>
	);
};

export default HeroText;
