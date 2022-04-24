const editStuff = (contentType) => {
	let url = "";
	if (contentType === "sections") url = urls.getSections;
	if (contentType === "blogs") url = urls.getBlogs;
	makeRequest(url);
};

const makeRequest = async (url) => {
	const request = await fetch(url);
	const data = await request.json();

	if (data.status === 500) alert("nothing to edit");

	if (data.sections) showContent(data.sections, "section");
	if (data.blogs) showContent(data.blogs, "blog");
};

const showContent = (content, type) => {
	const main = document.getElementById("admin_edit");
	for (let i = 0; i < content.length; i++) {
		const submitBtn = document.createElement("button");
		const blockTitle = document.createElement("h4");
		const ele = document.createElement("section");
		const title = document.createElement("textarea");
		const text = document.createElement("textarea");
		const br = document.createElement("br");
		const hr = document.createElement("hr");

		let blockTitleText = "Edit " + type;
		let text_inner = "";

		let db_id = "";
		let container_id = "";
		if (type === "section") {
			db_id = content[i].section_id;
			text_inner = content[i].description;
			container_id = "edit_" + type + "_" + content[i].section_id;
			ele.setAttribute("id", container_id);
		}
		const blogDesc = document.createElement("textarea");
		if (type === "blog") {
			db_id = content[i].blog_id;
			blogDesc.innerHTML = content[i].description;
			text_inner = content[i].content;
			container_id = "edit_" + type + "_" + content[i].blog_id;
			ele.setAttribute("id", container_id);
		}

		blockTitle.innerHTML = blockTitleText;
		title.innerHTML = content[i].title;
		text.innerHTML = text_inner;
		submitBtn.innerHTML = "Go";

		submitBtn.onclick = () => {
			getSubmitData(container_id, db_id, type);
		};

		main.appendChild(ele);
		ele.appendChild(blockTitle);
		ele.appendChild(title);
		if (type === "blog") ele.appendChild(blogDesc);
		ele.appendChild(text);
		ele.after(br);
		ele.after(hr);
		ele.after(submitBtn);
	}
};

const getSubmitData = (id, db_id, type) => {
	const container = document.getElementById(id);
	const childData = container.children;

	let data = new FormData();
	data.append("title", childData[1].value);
	data.append("description", childData[2].value);
	data.append("db_id", db_id);

	let url = urls.updateSection;

	if (type === "blog") {
		url = urls.updateBlog;
		const b_content = childData[3].value;
		data.append("content", b_content);
	}
	doEditSubmit(url, data);
};

const doEditSubmit = async (url, data) => {
	const edit_request = await fetch(url, {
		method: "POST",
		body: data,
	});
	const edit_response = await edit_request.json();

	if (edit_response.status === 202) alert("yay");
	if (edit_response.status !== 202) alert("nay");
};
