let urls;

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
	auth: "https://lachlanstephan.herokuapp.com/api/auth/checkIfAdmin.php",
	contact: "https://lachlanstephan.herokuapp.com/api/contact/contact.php",
	getSections:
		"https://lachlanstephan.herokuapp.com/api/sections/getSections.php",
	getBlogs: "https://lachlanstephan.herokuapp.com/api/blogs/getBlog.php",
	postBlogs: "https://lachlanstephan.herokuapp.com/api/blogs/newBlog.php",
	postSections:
		"https://llachlanstephan.herokuapp.com/api/sections/newSection.php",
};

const doFetch = async (url) => {
	const req = await fetch(url, {
		method: "GET",
	});
	if (req.status === 200) {
		return true;
	}
};

const checkProd = async () => {
	const prodUrl = "https://lachlanstephan.herokuapp.com/checkEnv.php";
	try {
		if (await doFetch(prodUrl)) {
			console.log("prod r true");
			urls = prod;
			getStuff();
		}
	} catch (e) {
		console.log(e);
	}
};

const checkLocal = async () => {
	const devUrl = "http://localhost/mysite_server/checkEnv.php";
	try {
		if (await doFetch(devUrl)) {
			urls = dev;
			getStuff();
		}
	} catch (e) {
		console.log(e);
	}
};

const getStuff = async () => {
	await Promise.all([fetchSections(), getBlogs()]);
};

checkProd();
checkLocal();
