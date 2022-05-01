const main_2 = document.getElementById("blog_main");

const getBlogs = async () => {
	try {
		let data = await fetch(urls.getBlogs);
		data = await data.json();
		createTexts(main_2, data.blogs);
	} catch (e) {
		setFetchFailedErrMsg(e, main_2);
	}
};

const setBlogStuff = (sect, b_id) => {
	sect.setAttribute("id", b_id);
};
