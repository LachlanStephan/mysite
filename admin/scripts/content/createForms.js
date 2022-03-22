const admin_form = document.getElementById("admin_forms");

const createForm = (form) => {
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

	// #### content
	const contentLabel = document.createElement("label");
	const contentInput = document.createElement("textarea");

	// label
	const contentId = "content_input" + "_" + form;
	contentLabel.setAttribute("for", contentId);
	contentLabel.innerHTML = "Content";

	// textarea
	contentInput.setAttribute("type", "text");
	contentInput.setAttribute("id", contentId);

	// submit
	const submitBtn = document.createElement("button");
	submitBtn.innerHTML = "Go";

	// append all ele
	admin_form.appendChild(formHeading);
	admin_form.appendChild(newForm);
	newForm.appendChild(titleLabel);
	newForm.appendChild(titleInput);
	newForm.appendChild(contentLabel);
	newForm.appendChild(contentInput);
	newForm.appendChild(submitBtn);
};
