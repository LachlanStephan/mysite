const admin_form = document.getElementById("admin_forms");

const createContentLabel = (form) => {
	const contentId = "content" + "_" + form;
	const contentLabel = document.createElement("label");

	// label
	contentLabel.setAttribute("for", contentId);
	contentLabel.innerHTML = "Content";

	return contentLabel;
};

const createContentInput = (form) => {
	const contentId = "content" + "_" + form;
	const contentInput = document.createElement("textarea");
	// content
	contentInput.setAttribute("type", "text");
	contentInput.setAttribute("id", contentId);
	contentInput.setAttribute("name", contentId);

	return contentInput;
};

const createForm = (form) => {
	let isBlog;

	if (form === "blog") {
		isBlog = true;
	}

	const newForm = document.createElement("form");
	newForm.setAttribute("name", form);
	newForm.setAttribute("id", "form_" + form);

	const formHeading = document.createElement("h4");
	formHeading.innerHTML = form;

	// #### heading
	const titleLabel = document.createElement("label");
	const titleInput = document.createElement("input");

	// label
	const titleId = "title_input" + "_" + form;
	titleLabel.setAttribute("for", titleId);
	titleLabel.innerHTML = "Title";

	// input
	titleInput.setAttribute("type", "text");
	titleInput.setAttribute("id", titleId);
	titleInput.setAttribute("name", titleId);

	// #### description
	const descriptionLabel = document.createElement("label");
	const descriptionInput = document.createElement("textarea");

	// label
	const descriptionId = "desc_input" + "_" + form;
	descriptionLabel.setAttribute("for", descriptionId);
	descriptionLabel.innerHTML = "Description";

	// textarea
	descriptionInput.setAttribute("type", "text");
	descriptionInput.setAttribute("id", descriptionId);
	descriptionInput.setAttribute("name", descriptionId);

	// submit
	const submitBtn = document.createElement("button");
	submitBtn.innerHTML = "Go" + " " + form;
	submitBtn.onclick = () => {
		postContent(submitBtn.innerHTML);
	};

	// append all ele
	admin_form.appendChild(formHeading);
	admin_form.appendChild(newForm);
	newForm.appendChild(titleLabel);
	newForm.appendChild(titleInput);
	newForm.appendChild(descriptionLabel);
	newForm.appendChild(descriptionInput);
	if (isBlog) {
		newForm.appendChild(createContentLabel(form));
		newForm.appendChild(createContentInput(form));
	}
	admin_form.appendChild(submitBtn);
};
