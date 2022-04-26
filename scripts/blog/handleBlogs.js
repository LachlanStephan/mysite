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

const setBlogStuff = (sect, b_id, content) => {
	sect.setAttribute("id", b_id);
	sect.onclick = () => {
		clickOnBlog(b_id, content);
	};
};

const clickOnBlog = (id, content) => {
	localStorage.setItem("blog_id", id);
	localStorage.setItem("blog_content", content);
	location.href = urls.blog;
};
