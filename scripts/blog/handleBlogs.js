const main_2 = document.getElementById("blog_main");

const getBlogs = async () => {
	let data = await fetch(urls.getBlogs);
	data = await data.json();
	createTexts(main_2, data.blogs);
};

const setBlogStuff = (sect, b_id, content) => {
	sect.setAttribute("id", b_id);
};
