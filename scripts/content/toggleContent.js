const landing = document.getElementById("landing_main");
const blog = document.getElementById("blog_main");
const linkText = document.getElementById("blog_link");

const toggleBlog = (page) => {
	removePreviousActive();
	setActiveLink(page);
	setCurrentPage(page);
	if (page === "blog") {
		toggleDisplay(landing, "none");
		toggleDisplay(blog, "block");
	}
	if (page === "home") {
		toggleDisplay(landing, "block");
		toggleDisplay(blog, "none");
	}
};

const setCurrentPage = (page) => {
	localStorage.setItem("current_page", page);
};

const checkCurrPage = () => {
	if (localStorage.getItem("current_page")) {
		const p = localStorage.getItem("current_page");
		if (p === "blog") {
			toggleBlog("blog");
		}
	}
};

checkCurrPage();
