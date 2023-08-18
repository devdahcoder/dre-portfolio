
type Props = {
	class?: string;
	imageLink?: string;
	index?: number;
};

const ImageContainer = (props: Props) => {
	return (
		<div class="block w-full">
			<div>
				<img
					src={`${props.imageLink}`}
					alt="image"
					// class="w-full h-full absolute top-0 left-0 select-none object-cover"
				/>
			</div>
		</div>
	);
};

export default ImageContainer;
