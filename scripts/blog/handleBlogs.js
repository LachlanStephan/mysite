const main_2 = document.getElementById("blog_main");

const getBlogs = async () => {
	setLoader();
	let data = await fetch(urls.getBlogs);
	data = await data.json();
	removeLoader();
	createTexts(main_2, data.blogs);
};

const setBlogStuff = (sect, b_id, content) => {
	sect.setAttribute("id", b_id);
	sect.onclick = () => {
		clickOnBlog(b_id, content);
	};
};

const clickOnBlog = (id, content) => {
	localStorage.setItem("blog_id", id);
	localStorage.setItem("blog_content", content);
	window.open(urls.blog, "_blank");
};

const checkTheme = () => {
	let theme = localStorage.getItem("current_mode");
	if (theme === "lightMode") {
		const body = document.getElementById("body");
		body.classList.add("lightMode");
	}
};

const showBlog = () => {
	checkTheme();
	const ele = document.getElementById("blog_page");
	const sect = document.createElement("section");
	sect.setAttribute("id", "blog_" + localStorage.getItem("blog_id"));
	sect.innerHTML = localStorage.getItem("blog_content");
	ele.appendChild(sect);
};

getBlogs();
