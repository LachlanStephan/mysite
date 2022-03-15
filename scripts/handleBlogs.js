const main_2 = document.getElementById("blog_main");

// Fetch this from api when built
const getBlogs = async() => {
	let data = await fetch('http://localhost:8888/mysite/api/blogs/blog.php');
	data = await data.json();
	setBlogs(data);
}

const setBlogs = (obj) => {
	Object.keys(obj).forEach((key) => {
		const sect = document.createElement("section");

		const h3 = document.createElement("h3");
		const p = document.createElement("p");
		const br = document.createElement("br");

		h3.innerHTML = obj[key].title;
		p.innerHTML = obj[key].content;

		main_2.appendChild(sect);
		sect.appendChild(h3);
		sect.appendChild(p);

		sect.appendChild(br);
	});
};

getBlogs();
