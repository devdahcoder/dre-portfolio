import { onMount, type Component } from "solid-js";

// ** Components
import gsap from "gsap";
import Contact from "./components/section/contact/contact";
import Experience from "./components/section/experience";
import Footer from "./components/section/footer";
import Work from "./components/section/work";
import Time from "./components/time";
import TextScroll from "./components/text-scroll";
import HeroText from "./components/hero-text";
import Header from "./components/header";

const App: Component = () => {
	return (
		<div class="font-inter">
			<Time />
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
