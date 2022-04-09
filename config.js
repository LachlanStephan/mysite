let isDev = false;
let isProd = false;

const checkEnv = async () => {
	const prodUrl = "https://ljstephan.dev/mysite_server/api/auth/checkEnv.php";
	fetch(prodUrl)
		.then((response) => () => {
			if (response) isProd = true;
		})
		.catch((isDev = true));
};

checkEnv();

const dev = {
	home: "http://127.0.0.1:5500/index.html",
	auth: "http://localhost/mysite_server/api/auth/checkIfAdmin.php",
	getSections: "http://localhost/mysite_server/api/sections/getSections.php",
	contact: "http://localhost/mysite_server/api/contact/contact.php",
	getBlogs: "http://localhost/mysite_server/api/blogs/getBlog.php",
	postBlogs: "http://localhost/mysite_server/api/blogs/newBlog.php",
	postSections: "http://localhost/mysite_server/api/sections/newSection.php",
};

const prod = {
	home: "https://ljstephan.dev",
	auth: "https://ljstephan.dev/mysite_server/api/auth/checkIfAdmin.php",
	contact: "https://ljstephan.dev/mysite_server/api/contact/contact.php",
	getSections:
		"https://ljstephan.dev/mysite_server/api/sections/getSections.php",
	getBlogs: "https://ljstephan.dev/mysite_server/api/blogs/getBlog.php",
	postBlogs: "https://ljstephan.dev/mysite_server/api/blogs/newBlog.php",
	postSections:
		"https://ljstephan.dev/mysite_server/api/sections/newSection.php",
};

let urls;
if (isProd) {
	urls = prod;
}

if (isDev) {
	urls = dev;
}
