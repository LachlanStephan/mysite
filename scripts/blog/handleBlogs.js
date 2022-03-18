const main_2 = document.getElementById("blog_main");

const getBlogs = async() => {
	let data = await fetch('http://localhost:8888/mysite/api/blogs/blog.php');
	data = await data.json();
	createTexts(main_2, data);
}

getBlogs();