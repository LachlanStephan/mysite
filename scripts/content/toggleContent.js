const landing = document.getElementById("landing_main");
const blog = document.getElementById("blog_main");
const linkText = document.getElementById("blog_link");
const formEle = document.getElementById("form_main");

let landing_page = true;

const checkWhichContent = () => {
	if (landing.style.display !== "none") {
		landing_page = true;
	} else {
		landing_page = false;
	}
};

const toggleBlog = (page) => {
	checkWhichContent();
	removePreviousActive();
	setActiveLink(page);
	if (page === "blog") {
		toggleDisplay(landing, "none");
		toggleDisplay(formEle, "none");
		toggleDisplay(blog, "block");
	}
	if (page === "home") {
		toggleDisplay(formEle, "block");
		toggleDisplay(blog, "none");
	}
};

const setActiveLink = (page) => {
	const link = document.getElementById(page + "_link");
	link.classList.add("active");
};

const removePreviousActive = () => {
	const links = document.getElementsByClassName("link");
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove("active");
	}
};
