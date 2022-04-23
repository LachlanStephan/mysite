const ele = document.getElementById("admin_options");
const options = ["blog", "section", "edit sections", "edit blogs"];
const sect_form = document.getElementById("form_section");
const blog_form = document.getElementById("form_blog");

const createBtns = () => {
	for (let i = 0; i < options.length; i++) {
		const btn = document.createElement("button");
		btn.innerHTML = options[i];
		ele.appendChild(btn);

		if (btn.innerHTML === "blog") {
			btn.onclick = () => {
				if (formDoesNotExist("blog")) {
					createForm("blog");
				}
			};
		}
		if (btn.innerHTML === "section") {
			btn.onclick = () => {
				if (formDoesNotExist("section")) {
					createForm("section");
				}
			};
		}
		if (btn.innerHTML === "edit sections") {
			let counter = 0;
			btn.onclick = () => {
				if (counter < 1) {
					editStuff("sections");
				}
				counter++;
			};
		}
		if (btn.innerHTML === "edit blogs") {
			let counter = 0;
			btn.onclick = () => {
				if (counter < 1) {
					editStuff("blogs");
				}
				counter++;
			};
		}
	}
};

const formDoesNotExist = (form) => {
	const id = "form" + "_" + form;
	if (document.getElementById(id)) {
		return false;
	}
	return true;
};
