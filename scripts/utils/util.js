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
			const sect = document.createElement("section");

			const h3 = document.createElement("h3");
			const p = document.createElement("p");
			const br = document.createElement("br");

			h3.innerHTML = obj[key].title;
			p.innerHTML = obj[key].description;

			if (obj[key].blog_id) {
				const b_id = "blog" + "_" + obj[key].blog_id;
				const content = obj[key].content;
				setBlogStuff(sect, b_id, content);
			}

			ele.appendChild(sect);
			sect.appendChild(h3);
			sect.appendChild(p);
			sect.appendChild(br);
		});
	} else {
		createNoContentEle(ele);
	}
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
