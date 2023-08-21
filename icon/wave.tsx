
type Props = {
    class?: string;
    width?: string;
    height?: string;
}

const Wave = (props: Props) => {

    return (
		<svg
			class={props.class}
			width={props.width}
			height={props.height}
			viewBox={`0 0 ${props.width} ${props.height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.241 6.07C3.868 5.632 4.812 5.716 5.375 6.181L4.73 5.243C4.21 4.502 4.397 3.701 5.138 3.181C5.879 2.663 7.98 4.055 7.98 4.055C7.456 3.307 7.554 2.359 8.301 1.835C9.05 1.312 10.082 1.493 10.605 2.242L17.552 12.055L16.667 20.639L9.278 17.944L2.834 8.389C2.305 7.636 2.488 6.598 3.241 6.07Z"
				fill="#90603E"
			/>
			<path
				d="M1.796 11.529C1.796 11.529 1.042 10.43 2.142 9.676C3.242 8.922 3.996 10.021 3.996 10.021L7.496 15.126C7.617 14.924 7.749 14.726 7.897 14.53L3.038 7.446C3.038 7.446 2.284 6.346 3.384 5.592C4.483 4.838 5.238 5.937 5.238 5.937L9.808 12.602C9.978 12.463 10.151 12.324 10.331 12.187L5.033 4.46C5.033 4.46 4.278 3.361 5.379 2.607C6.478 1.853 7.232 2.952 7.232 2.952L12.53 10.678C12.725 10.559 12.918 10.456 13.11 10.346L8.159 3.125C8.159 3.125 7.405 2.025 8.504 1.271C9.604 0.518 10.357 1.616 10.357 1.616L15.594 9.253L16.389 10.414C13.091 12.677 12.776 16.934 14.661 19.682C15.038 20.232 15.588 19.855 15.588 19.855C13.326 16.556 14.017 12.848 17.316 10.587L16.343 5.718C16.343 5.718 15.98 4.436 17.262 4.072C18.545 3.709 18.908 4.991 18.908 4.991L20.032 8.327C20.478 9.65 20.951 10.968 21.579 12.215C23.35 15.735 22.292 20.109 18.952 22.4C15.308 24.899 10.328 23.97 7.83 20.327L1.796 11.529Z"
				fill="#AF7E57"
			/>
			<path
				d="M8 21.333C5.334 21.333 2.639 18.639 2.639 15.972C2.639 15.604 2.369 15.306 2 15.306C1.631 15.306 1.305 15.604 1.305 15.972C1.305 19.972 4 22.667 8 22.667C8.369 22.667 8.667 22.34 8.667 21.972C8.667 21.604 8.369 21.333 8 21.333Z"
				fill="#5DADEC"
			/>
			<path
				d="M4.667 22.638C2.667 22.638 1.333 21.306 1.333 19.305C1.333 18.937 1.036 18.639 0.666 18.639C0.298 18.639 0 18.937 0 19.305C0 21.972 2 23.972 4.667 23.972C5.035 23.972 5.334 23.674 5.334 23.305C5.334 22.937 5.035 22.638 4.667 22.638ZM16 1.305C15.632 1.305 15.333 1.604 15.333 1.972C15.333 2.34 15.632 2.639 16 2.639C18.666 2.639 21.333 5.032 21.333 7.972C21.333 8.34 21.632 8.639 22 8.639C22.368 8.639 22.667 8.34 22.667 7.972C22.667 4.296 20 1.305 16 1.305Z"
				fill="#5DADEC"
			/>
			<path
				d="M19.333 0C18.966 0 18.666 0.27 18.666 0.639C18.666 1.007 18.966 1.333 19.333 1.333C21.333 1.333 22.638 2.816 22.638 4.638C22.638 5.007 22.964 5.305 23.334 5.305C23.702 5.305 23.972 5.007 23.972 4.638C23.972 2.081 22 0 19.333 0Z"
				fill="#5DADEC"
			/>
		</svg>
	);
}
export default Wave