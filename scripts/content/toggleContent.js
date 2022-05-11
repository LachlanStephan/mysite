class ToggleContent extends Util {
	// private properties
	#landing;
	#blog;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#landing = document.getElementById("landing_main");
		this.#blog = document.getElementById("blog_main");
	}

	// private methods

	// public methods
	toggleBlog = (page) => {
		this.removePreviousActive();
		this.setActiveLink(page);
		this.setCurrentPage(page);
		if (page === "blog") {
			this.toggleDisplay(this.#landing, "none");
			this.toggleDisplay(this.#blog, "block");
		}
		if (page === "home") {
			this.toggleDisplay(this.#landing, "block");
			this.toggleDisplay(this.#blog, "none");
		}
	};

	setCurrentPage = (page) => {
		localStorage.setItem("current_page", page);
	};

	checkCurrPage = () => {
		if (localStorage.getItem("current_page")) {
			const p = localStorage.getItem("current_page");
			if (p === "blog") {
				this.toggleBlog("blog");
			}
		}
	};
}

const tc = new ToggleContent();
tc.checkCurrPage();
