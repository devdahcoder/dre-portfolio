import { onMount, type Component } from "solid-js";

// ** Components
import gsap from "gsap";
import HeroText from "./components/hero-text";
import Contact from "./components/section/contact/contact";
import Experience from "./components/section/experience/experience";
import Footer from "./components/section/footer/footer";
import Header from "./components/section/header/header";
import Work from "./components/section/work/work";
import TextScroll from "./components/text-scroll";
import Time from "./components/time";

const App: Component = () => {
	return (
		<div class="">
			{/* <Time /> */}
			<Header
			// cursorType={cursorType} setCursorType={setCursorType}
			/>
			{/* <HeroText
			// cursorType={cursorType}
			// setCursorType={setCursorType}
			// hasPageCompletedLoading={hasPageCompletedLoading}
			/> */}
			{/* <TextScroll /> */}
			{/* <About
				cursorType={cursorType}
				setCursorType={setCursorType}
				videoRef={videoRef}
				handleVideoPlay={handleVideoPlay}
			/> */}
			<Work />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
