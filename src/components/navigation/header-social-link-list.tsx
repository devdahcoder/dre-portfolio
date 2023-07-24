import { headerSocialMediaLink } from "../../../content/link-content";
import { IHeaderSocialMediaLink } from "../../../interface";
import HeaderSocialLinkItem from "./header-social-link-item";

type Props = {
	cursorType: string;
	// setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderSocialLinkList = (props: Props) => {

	return (
		<div class="flex flex-row items-center gap-x-4">
			{headerSocialMediaLink.map(
				(props: IHeaderSocialMediaLink, index: number) => {

					return (
						<HeaderSocialLinkItem
							id={props.id}
							class={props.class}
							href={props.href}
							icon={props.icon}
							text={props.text}
							style={props.style}
							containerClassName={props.containerClassName}
							// cursorType={props.cursorType}
							// setCursorType={setCursorType}
						/>
					);

				}
			)}
		</div>
	);
};

export default HeaderSocialLinkList;
