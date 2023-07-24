import { motion } from "framer-motion";

type Props = {
	textArray?: string[];
	containerClassName?: string;
	subContainerClassName?: string;
	class?: string;
	delay?: number;
	wait?: number;
	hasPageCompletedLoading?: boolean;
};

const ParallaxCharacter = (props: Props) => {
	const {
		textArray,
		class,
		containerClassName,
		subContainerClassName,
		delay,
		wait,
		hasPageCompletedLoading,
	} = props;

	return (
		<div
			class={` flex flex-row items-center justify-center ${containerClassName}`}
		>
			<span
				class={`overflow-hidden flex flex-row items-center ${subContainerClassName}`}
			>
				{textArray?.map((char: string, index: number) => {
					const nameVariant = {
						hidden: {
							y: "60%",
							opacity: 0,
						},
						visible: (index: number) => ({
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.2,
								delay: index * 0.03,
								ease: "linear",
							},
						}),
					};
					return (
						<motion.span
							initial="hidden"
							custom={index}
							variants={nameVariant}
							whileInView={"visible"}
							viewport={{ once: true }}
							key={index}
							class={`${class}`}
						>
							{char}
						</motion.span>
					);
				})}
			</span>
		</div>
	);
};

export default ParallaxCharacter;
