const main_2 = document.getElementById("blog_main");

const getBlogs = async () => {
	let data = await fetch("http://localhost/mysite/api/blogs/getBlog.php");
	data = await data.json();
	createTexts(main_2, data.blogs);
};

getBlogs();
