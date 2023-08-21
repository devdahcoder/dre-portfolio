
type Props = {
	class?: string;
	imageLink?: string;
	index?: number;
};

const ImageContainer = (props: Props) => {
	return (
		<div class="work--item--image--container">
			<div class="work--item--image--sub--container">
				<img
					src={`${props.imageLink}`}
					alt="image"
					class={`${props.class}`}
				/>
			</div>
		</div>
	);
};

export default ImageContainer;
