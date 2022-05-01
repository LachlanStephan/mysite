const icon = document.getElementById("toggleIcon");
const iconClass = "fa-solid fa-toggle-";

const toggleColour = () => {
	const body = document.getElementById("body");
	// for icon
	if (body.className === "lightMode") {
		toggleIcon("on");
	} else {
		toggleIcon("off");
	}
	// for actual css change
	body.classList.toggle("lightMode");
	setCorrectModeInLocal(body.className);
};

const setCorrectModeInLocal = (currClass) => {
	setThemeParam(currClass);
	localStorage.setItem("current_mode", currClass);
};

const toggleIcon = (suffix) => {
	icon.className = iconClass + suffix;
};

const setIcon = () => {
	icon.className = iconClass + "on";
};

const setThemeParam = (currClass) => {
	const links = document.getElementsByClassName("blog_links");
	for (let i = 0; i < links.length; i++) {
		const curr = links[i].getAttribute("href");
		const parts = curr.split("&");
		const partToKeep = parts[0];
		const newHref = partToKeep + "&" + "theme=" + currClass;
		links[i].setAttribute("href", newHref);
	}
};

setIcon();
