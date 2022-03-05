const landing = document.getElementById("landing_main");
const blog = document.getElementById("blog_main");
const linkText = document.getElementById("blog_link");

let main_1 = true;

const checkWhichContent = () => {
	if (landing.style.display !== "none") {
		main_1 = true;
	} else {
		main_1 = false;
	}
};

const toggleBlog = () => {
	checkWhichContent();
	if (main_1) {
		toggleLinkText("Home");
		toggleDisplay(landing, "none");
		toggleDisplay(blog, "block");
	}
	if (!main_1) {
		toggleLinkText("Blog");
		toggleDisplay(landing, "block");
		toggleDisplay(blog, "none");
	}
};

const toggleDisplay = (ele, string) => {
	ele.style.display = string;
};

const toggleLinkText = (string) => {
	linkText.innerHTML = string;
};
