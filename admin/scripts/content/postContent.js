const doPost = async (data, url) => {
	let res = await fetch(url, {
		method: "POST",
		body: data,
	});
	res = await res.json();
	handleContentRes(res.status);
};

const handleContentRes = (status) => {
	if (status === 202) {
		window.location.href = urls.home;
	}
	if (status !== 202) {
		alert("Oops");
	}
};

const postBlog = () => {
	const b_form = document.getElementById("form_blog");
	const b_data = new FormData(b_form);
	const url = urls.postBlogs;
	doPost(b_data, url);
};

const postSection = () => {
	const s_form = document.getElementById("form_section");
	const s_data = new FormData(s_form);
	const url = urls.postSections;
	doPost(s_data, url);
};

const postContent = (type) => {
	if (type === "Go blog") {
		postBlog();
	}
	if (type === "Go section") {
		postSection();
	}
};
