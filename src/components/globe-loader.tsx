import { motion } from "framer-motion";

type Props = {
	class?: string;
	loading: boolean;
	loadingPercentage?: number;
	hasPageCompletedLoading?: boolean;
};

const GlobeLoader = (props: Props) => {
	const { class, loading, loadingPercentage, hasPageCompletedLoading } =
		props;
	return (
		<motion.div
			initial={{ zIndex: 100, backgroundColor: `black` }}
			animate={
				hasPageCompletedLoading && {
					zIndex: 0,
					backgroundColor: ``,
					transition: {
						ease: "linear",
						duration: 0.5,
					},
				}
			}
			class={`${
				hasPageCompletedLoading && "pointer-events-none blur-3xl"
			}  fixed top-0 left-0 h-full w-full flex flex-row items-center justify-center`}
		>
			<div
				class={`relative globe--container w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 ${class}`}
			>
				<div class="globe--loader"></div>
				<motion.p
					initial={{ opacity: 0.1 }}
					animate={
						hasPageCompletedLoading
							? { opacity: 0 }
							: { opacity: 1 }
					}
					transition={{ ease: "easeInOut", duration: 6 }}
					class="text-black text-4xl md:text-5xl lg:text-6xl font-medium font-cabinetgrotesk absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
				>
					{loadingPercentage}%
				</motion.p>
			</div>
		</motion.div>
	);
};

export default GlobeLoader;
