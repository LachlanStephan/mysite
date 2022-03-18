const ele = document.getElementById("admin_options");
const options = ["blog", "section"];

const createBtns = () => {
	console.log(ele);
	for (let i = 0; i < options.length; i++) {
		const btn = document.createElement("button");
		btn.innerHTML = options[i];
		ele.appendChild(btn);

		if (btn.innerHTML == "blog") {
			btn.onclick = () => {
				showForm("blog"); // swap to create form
			};
		}
		if (btn.innerHTML == "section") {
			btn.onclick = () => {
				showForm("section"); // swap tp create form
			};
		}
	}
};
