class Util {
	// private properties
	#icon;
	#iconClass;

	// public properties
	loader;

	// initialise values
	constructor() {
		this.#icon = document.getElementById("toggleIcon");
		this.#iconClass = "fa-solid fa-toggle-";
		this.loader = document.getElementById("loader");
	}

	// private methods
	#getCurrTheme = () => {
		const storedTheme = localStorage.getItem("current_mode");
		return storedTheme ? storedTheme : "";
	};

	#createNoContentEle = (ele) => {
		const sect = document.createElement("section");
		sect.innerHTML = "Nothing here yet";
		sect.setAttribute("id", "no_content");
		ele.appendChild(sect);
	};

    #addReadTimeContainer() {
        const container = document.createElement('div');
        container.className = 'read_time_container';
        return container;
    }

    #addReadIcon() {
        const i = document.createElement('i');
        i.className = 'fa-solid fa-clock';
        i.style.margin = '0 0 0 0.5rem';
        return i;
    }

	// public methods
	preventFormDefault = (event) => {
		if (typeof event.cancelable !== "boolean" || event.cancelable) {
			event.preventDefault();
		}
	};

	toggleIcon = (suffix) => {
		this.#icon.className = this.#iconClass + suffix;
	};

	toggleDisplay = (ele, string) => {
		ele.style.display = string;
	};

	setLoader = () => {
		this.toggleDisplay(this.loader, "block");
	};

	removeLoader = () => {
		this.toggleDisplay(this.loader, "none");
	};

	createTexts = (ele, obj) => {
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
							this.#getCurrTheme()
					);
					container.setAttribute("id", b_id);
                    const readCont = this.#addReadTimeContainer();
                    readCont.appendChild(h3);
                    readCont.appendChild(this.#addReadIcon());
                    container.appendChild(readCont);
				}
				ele.appendChild(container);
                if (!obj[key].blog_id) {
				    container.appendChild(h3);
                }
				container.appendChild(p);
				container.appendChild(br);
			});
		} else {
			this.#createNoContentEle(ele);
		}
	};

    /**
     * Split making sections and blogs into their functions 
     * Move new funcs into their respective files - out of util
     * */

	setActiveLink = (page) => {
		const link = document.getElementById(page + "_link");
		link.classList.add("active");
	};

	removePreviousActive = () => {
		const links = document.getElementsByClassName("link");
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
	};

	setFetchFailedErrMsg = (e, ele) => {
		this.removeLoader();
		const failedMsg = document.createElement("section");
		failedMsg.innerHTML = "Fetch failed...";
		failedMsg.style.paddingTop = "1rem";
		ele.appendChild(failedMsg);
		setTimeout(() => {
			failedMsg.innerHTML = "";
		}, 5000);
		console.error(e);
	};
}
