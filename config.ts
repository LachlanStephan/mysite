// let isDev = true;
let isDev = false;
let urls;

const dev = {
	home: "http://127.0.0.1:5500/",
	blog: "http://127.0.0.1:5500/blog.html",
	auth: "http://localhost/mysite_server/api/auth/checkIfAdmin.php",
	getSections: "http://localhost/mysite_server/api/sections/getSections.php",
	contact: "http://localhost/mysite_server/api/contact/contact.php",
	getBlogs: "http://localhost/mysite_server/api/blogs/getBlog.php",
	postBlogs: "http://localhost/mysite_server/api/blogs/newBlog.php",
	postSections: "http://localhost/mysite_server/api/sections/newSection.php",
	updateSection:
		"http://localhost/mysite_server/api/sections/updateSection.php",
	updateBlog: "http://localhost/mysite_server/api/blogs/updateBlog.php",
	showBlog: "http://localhost/mysite_server/api/blogs/showBlog.php",
	deleteSection:
		"http://localhost/mysite_server/api/sections/deleteSection.php",
	deleteBlog: "http://localhost/mysite_server/api/blogs/deleteBlog.php",
};

const prod = {
	home: "https://ljstephan.dev",
	blog: "https://ljstephan.dev/blog.html",
	auth: "https://lachlanstephan.herokuapp.com/api/auth/checkIfAdmin.php",
	contact: "https://lachlanstephan.herokuapp.com/api/contact/contact.php",
	getSections:
		"https://lachlanstephan.herokuapp.com/api/sections/getSections.php",
	getBlogs: "https://lachlanstephan.herokuapp.com/api/blogs/getBlog.php",
	postBlogs: "https://lachlanstephan.herokuapp.com/api/blogs/newBlog.php",
	postSections:
		"https://lachlanstephan.herokuapp.com/api/sections/newSection.php",
	updateBlog: "https://lachlanstephan.herokuapp.com/api/blogs/updateBlog.php",
	updateSection:
		"https://lachlanstephan.herokuapp.com/api/sections/updateSection.php",
	showBlog: "https://lachlanstephan.herokuapp.com/api/blogs/showBlog.php",
	deleteSection:
		"https://lachlanstephan.herokuapp.com/api/sections/deleteSection.php",
	deleteBlog: "https://lachlanstephan.herokuapp.com/api/blogs/deleteBlog.php",
};

if (isDev) {
	urls = dev;
}

if (!isDev) {
	urls = prod;
}

export urls;
