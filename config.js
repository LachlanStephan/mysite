let isDev = false;
let isProd = false;

const checkEnv = async () => {
	const prodUrl = "https://ljstephan.dev/mysite/api/auth/checkEnv.php";
	fetch(prodUrl)
		.then((response) => () => {
			if (response) isProd = true;
		})
		.catch((isDev = true));
};

checkEnv();

const dev = {
	home: "http://localhost/mysite",
	auth: "http://localhost/mysite/api/auth/checkIfAdmin.php",
	getSections: "http://localhost/mysite/api/sections/getSections.php",
	contact: "http://localhost/mysite/api/contact/contact.php",
	getBlogs: "http://localhost/mysite/api/blogs/getBlog.php",
	postBlogs: "http://localhost/mysite/api/blogs/newBlog.php",
	postSections: "http://localhost/mysite/api/sections/newSection.php",
};

const prod = {
	home: "https://ljstephan.dev",
	auth: "https://ljstephan.dev/mysite/api/auth/checkIfAdmin.php",
	contact: "https://ljstephan.dev/mysite/api/contact/contact.php",
	getSections: "https://ljstephan.dev/mysite/api/sections/getSections.php",
	getBlogs: "https://ljstephan.dev/mysite/api/blogs/getBlog.php",
	postBlogs: "https://ljstephan.dev/mysite/api/blogs/newBlog.php",
	postSections: "https://ljstephan.dev/mysite/api/sections/newSection.php",
};

let urls;
if (isProd) {
	urls = prod;
}

if (isDev) {
	urls = dev;
}
