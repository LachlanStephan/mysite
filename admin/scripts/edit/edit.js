const editSections = (contentType) => {
	let url = "";
	if (contentType === "sections") url = urls.getSections;
	if (contentType === "blogs") url = urls.getBlogs;
	makeRequest(url);
};

const makeRequest = async (url) => {
	const request = await fetch(url);
	const data = await request.json();

	if (data.status === 500) alert("nothing to edit");

	if (data.sections) showContentByTitle(data.sections, "section");
	if (data.blogs) showContentByTitle(data.blogs, "blog");
};

const showContentByTitle = (content, type) => {
	const main = document.getElementById("admin_edit");
	for (let i = 0; i < content.length; i++) {
		const blockTitle = document.createElement("h4");
		const ele = document.createElement("section");
		const title = document.createElement("textarea");
		const text = document.createElement("textarea");
		const br = document.createElement("br");
		const hr = document.createElement("hr");

		let blockTitleText = "Edit " + type;
		let text_inner = "";
		if (type === "section") text_inner = content[i].description;
		if (type === "blog") text_inner = content[i].content;

		blockTitle.innerHTML = blockTitleText;
		title.innerHTML = content[i].title;
		text.innerHTML = text_inner;

		ele.setAttribute("id", "edit_" + type);

		main.appendChild(ele);
		ele.appendChild(blockTitle);
		ele.appendChild(title);
		ele.appendChild(text);
		ele.after(br);
		ele.after(hr);
	}
};
