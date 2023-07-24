import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
	class?: string;
	imageLink?: string;
	index?: number;
};

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ImageContainer = (props: Props) => {
	const { class, imageLink } = props;
	const classStyle = props.class ? props.class : "";
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isInView, setIsInView] = useState<boolean>(false);

	return (
		<div class="block w-full">
			<motion.div
				initial={false}
				animate={
					isLoaded && isInView
						? {
								WebkitMaskImage: visibleMask,
								maskImage: visibleMask,
						  }
						: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
				}
				transition={{ duration: 0.5, delay: 0.001 }}
				viewport={{ once: true }}
				onViewportEnter={() => setIsInView(true)}
				class={`relative block overflow-hidden pb-[100%] ${classStyle}`}
			>
				<img
					src={`${imageLink}`}
					onLoad={() => setIsLoaded(true)}
					alt="image"
					class="w-full h-full absolute top-0 left-0 select-none object-cover"
				/>
			</motion.div>
		</div>
	);
};

export default ImageContainer;
