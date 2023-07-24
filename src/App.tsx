import { onMount, type Component } from "solid-js";

// ** Components
import Time from "./components/time";
import Experience from "./components/section/experience";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import gsap from "gsap";

const App: Component = () => {

	return (
		<div class="font-inter">
			<Time />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);

};

export default App;
