class Main {
	// private properties
	#body;
	#curr_theme;

	// initialise values
	constructor() {
		this.#body = document.getElementById("body");
		this.#curr_theme = localStorage.getItem("current_mode");
	}

	// private methods
	#setCorrectIcon() {
		if (this.#curr_theme === "lightMode") {
			toggleIcon("off");
		} else {
			toggleIcon("on");
		}
	}

	// public methods
	async fetchSiteData() {
		await Promise.all([fetchSections(), getBlogs()]);
	}

	checkTheme() {
		if (this.#curr_theme !== null) {
			this.#body.className = this.#curr_theme;
			this.#setCorrectIcon();
		}
	}
}

const m = new Main();

m.checkTheme();
m.fetchSiteData();
