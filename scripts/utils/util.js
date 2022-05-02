const loader = document.getElementById("loader");

const preventFormDefault = (event) => {
	if (typeof event.cancelable !== "boolean" || event.cancelable) {
		event.preventDefault();
	}
};

const toggleDisplay = (ele, string) => {
	ele.style.display = string;
};

const setLoader = () => {
	toggleDisplay(loader, "block");
};

const removeLoader = () => {
	toggleDisplay(loader, "none");
};

const createTexts = (ele, obj) => {
	if (obj.length > 0) {
		Object.keys(obj).forEach((key) => {
			let container;
			container = document.createElement("section");

			const h3 = document.createElement("h3");
			const p = document.createElement("p");
			const br = document.createElement("br");

			h3.innerHTML = obj[key].title;
			p.innerHTML = obj[key].description;

			if (obj[key].blog_id) {
				container = document.createElement("a");
				const db_id = obj[key].blog_id;
				const b_id = "blog" + "_" + obj[key].blog_id;
				container.setAttribute("class", "blog_links");
				container.setAttribute(
					"href",
					urls.showBlog +
						"?id=" +
						db_id +
						"&" +
						"theme=" +
						getCurrTheme()
				);
				container.setAttribute("id", b_id);
				const content = obj[key].content;
				setBlogStuff(container, b_id, content);
			}

			ele.appendChild(container);
			container.appendChild(h3);
			container.appendChild(p);
			container.appendChild(br);
		});
	} else {
		createNoContentEle(ele);
	}
};

const getCurrTheme = () => {
	const storedTheme = localStorage.getItem("current_mode");
	if (storedTheme) {
		return storedTheme;
	}
	return "";
};

const createNoContentEle = (ele) => {
	const sect = document.createElement("section");
	sect.innerHTML = "Nothing here yet";
	sect.setAttribute("id", "no_content");
	ele.appendChild(sect);
};

const setActiveLink = (page) => {
	const link = document.getElementById(page + "_link");
	link.classList.add("active");
};

const removePreviousActive = () => {
	const links = document.getElementsByClassName("link");
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove("active");
	}
};

const setFetchFailedErrMsg = (e, ele) => {
	removeLoader();
	const failedMsg = document.createElement("section");
	failedMsg.innerHTML = "Fetch failed...";
	failedMsg.style.paddingTop = "1rem";
	ele.appendChild(failedMsg);
	setTimeout(() => {
		failedMsg.innerHTML = "";
	}, 5000);
	console.error(e);
};
