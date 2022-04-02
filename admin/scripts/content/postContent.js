const doPost = async (data, url) => {
	console.log("POST");
	let res = await fetch(url, {
		method: "POST",
		body: data,
	});
	if (res.status === 200) {
		window.location.href = "http://localhost/mysite";
	}
};

const postBlog = () => {
	const b_form = document.getElementById("form_blog");
	const b_data = new FormData(b_form);
	const url = "http://localhost/mysite/api/blogs/newBlog.php";
	doPost(b_data, url);
};

const postSection = () => {
	const s_form = document.getElementById("form_section");
	const s_data = new FormData(s_form);
	const url = "";
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
