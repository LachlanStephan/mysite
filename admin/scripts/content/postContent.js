const postBlog = () => {
	//
	console.log("post blog");
};

const postSection = () => {
	//
	console.log("post section");
};

const postContent = (type) => {
	console.log(type);
	if (type === "Go blog") {
		postBlog();
	}
	if (type === "Go section") {
		postSection();
	}
};
