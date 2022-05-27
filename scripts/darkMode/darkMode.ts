class DarkMode extends Util {
	// private properties
	#body;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#body = document.getElementById("body");
	}

	// private methods
	#setThemeParam = (currClass) => {
		const links = document.getElementsByClassName("blog_links");
		for (let i = 0; i < links.length; i++) {
			const curr = links[i].getAttribute("href");
			const parts = curr.split("&");
			const partToKeep = parts[0];
			const newHref = partToKeep + "&" + "theme=" + currClass;
			links[i].setAttribute("href", newHref);
		}
	};

	#setCorrectModeInLocal = (currClass) => {
		this.#setThemeParam(currClass);
		localStorage.setItem("current_mode", currClass);
	};

	// public methods
	toggleColour = () => {
		// for icon
		if (this.#body.className === "lightMode") {
			this.toggleIcon("on");
		} else {
			this.toggleIcon("off");
		}
		// for actual css change
		this.#body.classList.toggle("lightMode");
		this.#setCorrectModeInLocal(this.#body.className);
	};
}

const dm = new DarkMode();
