import { Setter } from "solid-js";
import { headerNavigationLink } from "../../content/link-content";
import HeaderSocialLinkList from "./navigation/header-social-link-list";
import NavigationList from "./navigation/navigation-list/navigation-list";
import SectionContainer from "./section-container";

interface Props {
	cursorType?: string;
	setCursorType?: Setter<string>;
}

const Header = (props: Props) => {
	return (
		<SectionContainer
			containerClassName="border-b"
			class=" flex flex-row items-center justify-center sm:justify-between py-6"
		>
			<div class="hidden sm:flex flex-row items-center">
				<HeaderSocialLinkList />
			</div>
			<div class="flex flex-row items-center">
				<NavigationList link={headerNavigationLink} />
			</div>
		</SectionContainer>
	);
};

export default Header;
