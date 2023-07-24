import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

type Props = {
	loading: boolean;
};
const Loader = (props: Props) => {
	const { loading } = props;
	const controls = useAnimation();

	useEffect(() => {
		controls.start("visible");
	}, []);

	return (
		<motion.div
			initial={{ y: 0, opacity: 1 }}
			animate={
				!loading ? { y: "-200%", opacity: 0 } : { y: 0, opacity: 1 }
			}
			transition={{ ease: "easeInOut", duration: 0.5 }}
			class="z-50 fixed bg-[hsl(0, 0%, 7%)] top-0 left-0 overflow-y-hidden overflow-x-hidden w-full h-full flex flex-col items-center justify-center"
		>
			<divclass="bg-[hsl(0, 0%, 7%)] w-full overflow-hidden">
				<div
					class="
					loader--bar border mt-0 
					w-full
					max-w-[70%]
				"
				>
					<divclass="loader--circle"></div>
					<pclass="loader--text">Damilare</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Loader;
