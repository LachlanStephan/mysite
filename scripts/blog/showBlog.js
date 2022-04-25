const showBlog = () => {
	checkTheme();
	const ele = document.getElementById("blog_page");
	const sect = document.createElement("section");
	sect.setAttribute("id", "blog_" + localStorage.getItem("blog_id"));
	sect.innerHTML = localStorage.getItem("blog_content");
	ele.appendChild(sect);
};

const checkTheme = () => {
	let theme = localStorage.getItem("current_mode");
	if (theme === "lightMode") {
		const body = document.getElementById("body");
		body.classList.add("lightMode");
	}
};
