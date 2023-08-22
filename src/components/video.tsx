import { Component, Setter } from "solid-js";

type Props = {
	autoPlay?: boolean;
	muted?: boolean;
	loop?: boolean;
	src?: string;
	type?: string;
	controls?: boolean;
	class?: string;
	disablePictureInPicture?: boolean;
	height?: string;
	width?: string;
	videoRef?: HTMLVideoElement;
	// cursorType: string;
	// setCursorType: Setter<string>;
	// onClick?: () => void;
};

const Video: Component<Props> = (props: Props) => {
	// const { cursorType, setCursorType, onClick } = props;
	const classStyle = props.class ? props.class : "";

	return (
		<div
			// onMouseOver={() => setCursorType("video--hover")}
			// onMouseOut={() => setCursorType("")}
			class="block w-full"
		>
			<div
				class={`relative block overflow-hidden pb-[100%] ${classStyle}`}
			>
				<video
					ref={props.videoRef}
					class="w-full h-full absolute top-0 left-0 select-none object-cover"
					autoplay={props?.autoPlay}
					muted={props?.muted}
					loop={props?.loop}
					controls={props?.controls}
					// disablePictureInPicture={props?.disablePictureInPicture}
					height={props?.height}
					width={props?.width}
					// onClick={onClick}
				>
					<source src={props?.src} type={props?.type} />
				</video>
			</div>
		</div>
	);
};

export default Video;
