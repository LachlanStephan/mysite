const doPost = async (data, url) => {
	console.log("POST");
	let res = await fetch(url, {
		method: "POST",
		body: data,
		//
	});
	console.warn(res);
};

const postBlog = () => {
	const b_form = document.getElementById("form_blog");
	const b_data = new FormData(b_form);
	const url = "http://localhost:8888/mysite/api/blogs/newBlog.php";
	doPost(b_data, url);
	//
	console.log("post blog");
};

const postSection = () => {
	const s_form = document.getElementById("form_section");
	const s_data = new FormData(s_form);
	//
	console.log("post section");
};

const postContent = (type) => {
	if (type === "Go blog") {
		postBlog();
	}
	if (type === "Go section") {
		postSection();
	}
};
