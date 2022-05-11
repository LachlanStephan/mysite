class CreateOptions extends CreateForm {
	// private properties
	#ele;
	#options;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#ele = document.getElementById("admin_options");
		this.#options = ["blog", "section", "edit sections", "edit blogs"];
	}

	// private methods
	#formDoesNotExist = (form) => {
		const id = "form" + "_" + form;
		if (document.getElementById(id)) {
			return false;
		}
		return true;
	};
	// public methods
	createBtns = () => {
		for (let i = 0; i < this.#options.length; i++) {
			const btn = document.createElement("button");
			btn.innerHTML = this.#options[i];
			this.#ele.appendChild(btn);

			if (btn.innerHTML === "blog") {
				btn.onclick = () => {
					if (this.#formDoesNotExist("blog")) {
						this.createForm("blog");
					}
				};
			}
			if (btn.innerHTML === "section") {
				btn.onclick = () => {
					if (this.#formDoesNotExist("section")) {
						this.createForm("section");
					}
				};
			}
			if (btn.innerHTML === "edit sections") {
				let counter = 0;
				btn.onclick = () => {
					if (counter < 1) {
						this.editStuff("sections");
					}
					counter++;
				};
			}
			if (btn.innerHTML === "edit blogs") {
				let counter = 0;
				btn.onclick = () => {
					if (counter < 1) {
						this.editStuff("blogs");
					}
					counter++;
				};
			}
		}
	};
}
