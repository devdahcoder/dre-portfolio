import { Component } from "solid-js";
import { footerSocialMediaLink } from "../../../content/link-content";
import HeaderNavigationList from "../navigation/header-navigation-list";

type Props = {};

const Footer: Component<Props> = (props: Props) => {
	
	const linkClassName = `text-white hover:text-blue-700 hover:underline`;

	return (
		<div class="border-t bg-[#151515] px-3">
			<div class="flex flex-col lg:flex-row items-start sm:items-center justify-between py-5 w-4/5 sm:mx-auto sm:my-0 gap-y-5">
				<div class="flex flex-row items-center ">
					<HeaderNavigationList link={footerSocialMediaLink} />
				</div>

				<div class="text-white">
					<p>
						Collaborative work of{" "}
						<span>
							<a
								href="https://www.linkedin.com/in/damilare007/"
								target="_blank"
								rel="noopener noreferrer"
								class={`${linkClassName}`}
							>
								Damilare
							</a>
						</span>{" "}
						x{" "}
						<span>
							<a
								href="https://www.linkedin.com/in/olamide-adigun-200/"
								target="_blank"
								rel="noopener noreferrer"
								class={`${linkClassName}`}
							>
								Olamide
							</a>
						</span>{" "}
						(Dev)
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
