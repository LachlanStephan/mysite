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
		if (type === "section") {
			db_id = content[i].section_id;
			text_inner = content[i].description;
			ele.setAttribute(
				"id",
				"edit_" + type + "_" + content[i].section_id
			);
		}
		const blogDesc = document.createElement("textarea");
		if (type === "blog") {
			db_id = content[i].blog_id;
			blogDesc.innerHTML = content[i].description;
			text_inner = content[i].content;
			ele.setAttribute("id", "edit_" + type + "_" + content[i].blog_id);
		}

		blockTitle.innerHTML = blockTitleText;
		title.innerHTML = content[i].title;
		text.innerHTML = text_inner;
		submitBtn.innerHTML = "Go";

		submitBtn.onclick = () => {
			getSubmitData(ele.id, db_id);
		};

		main.appendChild(ele);
		ele.appendChild(blockTitle);
		ele.appendChild(title);
		if (type === "blog") ele.appendChild(blogDesc);
		ele.appendChild(text);
		ele.appendChild(submitBtn);
		ele.after(br);
		ele.after(hr);
	}
};

const getSubmitData = (id, db_id) => {
	const container = document.getElementById(id);
	const childData = container.children;

	let data = {};
	data.title = childData[1].innerHTML;
	data.description = childData[2].innerHTML;
	data.db_id = db_id;

	let url = urls.updateSection;

	if (childData.length === 5) {
		url = urls.updateBlog;
		console.log("blog");
		data.content = childData[3].value;
	}
	doEditSubmit(url, data);
};

const doEditSubmit = async (url, data) => {
	console.log(url, data);
	const edit_request = await fetch(url, {
		method: "POST",
		body: data,
	});
	const edit_response = await edit_request.json();

	if (edit_response.status === 202) alert("yay");
	if (edit_response.status !== 202) alert("nay");
};
