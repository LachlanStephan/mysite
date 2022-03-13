const main_2 = document.getElementById("blog_main");

// Fetch this from api when built
const blogs = {
	blog_1: {
		name: "Blog 1",
		description: "Description",
		content: "This is some good stuff",
	},
	blog_2: {
		name: "Blog 2",
		description: "Something",
		content: "This is some great stuff",
	},
};

const setBlogs = (obj) => {
	Object.keys(obj).forEach((key) => {
		const sect = document.createElement("section");

		const h3 = document.createElement("h3");
		const p = document.createElement("p");
		const br = document.createElement("br");

		h3.innerHTML = obj[key].name;
		p.innerHTML = obj[key].description;

		main_2.appendChild(sect);
		sect.appendChild(h3);
		sect.appendChild(p);

		sect.appendChild(br);
	});
};

setBlogs(blogs);
