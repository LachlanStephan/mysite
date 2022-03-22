const ele = document.getElementById("admin_options");
const options = ["blog", "section"];
const sect_form = document.getElementById("form_section");
const blog_form = document.getElementById("form_blog");

const createBtns = () => {
	console.log(ele);
	for (let i = 0; i < options.length; i++) {
		const btn = document.createElement("button");
		btn.innerHTML = options[i];
		ele.appendChild(btn);

		if (btn.innerHTML == "blog") {
			btn.onclick = () => {
				if (formDoesNotExist("blog")) {
					createForm("blog");
				}
			};
		}
		if (btn.innerHTML == "section") {
			btn.onclick = () => {
				if (formDoesNotExist("section")) {
					createForm("section");
				}
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
