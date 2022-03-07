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

const toggleBlog = () => {
	checkWhichContent();
	if (landing_page) {
		toggleLinkText("Home");
		toggleDisplay(landing, "none");
		toggleDisplay(formEle, "none");
		toggleDisplay(blog, "block");
	}
	if (!landing_page) {
		toggleLinkText("Blog");
		toggleDisplay(landing, "block");
		toggleDisplay(formEle, "block");
		toggleDisplay(blog, "none");
	}
};

const toggleDisplay = (ele, string) => {
	ele.style.display = string;
};

const toggleLinkText = (string) => {
	linkText.innerHTML = string;
};
