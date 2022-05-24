import { Util } from "./scripts/utils/util.js";

class Main extends Util {
	// private properties
	#body: HTMLElement | null;
	#curr_theme: string | null;

	// initialise values
	constructor() {
		super();
		this.#body = document.getElementById("body");
		this.#curr_theme = localStorage.getItem("current_mode");
	}

	// private methods
	#setCorrectIcon() {
		if (this.#curr_theme === "lightMode") {
			this.toggleIcon("off");
		} else {
			this.toggleIcon("on");
		}
	}

	// public methods
	checkTheme() {
		if (this.#curr_theme !== null && this.#body !== null) {
			this.#body.className = this.#curr_theme;
			this.#setCorrectIcon();
		}
	}
}

const m = new Main();
m.checkTheme();
