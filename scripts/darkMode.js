const icon = document.getElementById("toggleIcon");
const iconClass = "fa-solid fa-toggle-";

const toggleColour = () => {
	const body = document.getElementById("body");
	if (body.className === "lightMode") {
		toggleIcon("on");
	} else {
		toggleIcon("off");
	}
	body.classList.toggle("lightMode");
};

const toggleIcon = (suffix) => {
	const newClass = iconClass + suffix;
	if (suffix === "on") {
		icon.className = newClass;
	} else {
		icon.className = newClass;
	}
};

const setIcon = () => {
	icon.className = iconClass + "on";
};

setIcon();
