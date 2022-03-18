const sectionMain = document.getElementById("admin_section_main");
const blogMain = document.getElementById("admin_blog_main");

const showForm = (form) => {
	if (form === "section") {
		toggleDisplay(sectionMain, "block");
		toggleDisplay(blogMain, "none");
	}
	if (form === "blog") {
		toggleDisplay(sectionMain, "none");
		toggleDisplay(blogMain, "block");
	}
};
