class Section extends Util {
	// private properties
	#main_1;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#main_1 = document.getElementById("landing_main");
	}

	// private methods

	// public methods
	async getSections() {
		try {
			this.setLoader();
			let data = await fetch(urls.getSections);
			data = await data.json();
			this.removeLoader();
			this.createTexts(this.#main_1, data.sections);
		} catch (e) {
			this.setFetchFailedErrMsg(e, this.#main_1);
		}
	}

	setFirstLinkActive() {
		this.setActiveLink("home");
	}
}

const s = new Section();
s.getSections();
s.setFirstLinkActive();
