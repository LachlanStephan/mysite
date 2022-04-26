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
	if (currClass === "lightMode") {
		localStorage.setItem("current_mode", currClass);
	} else {
		localStorage.setItem("current_mode", "");
	}
};

const toggleIcon = (suffix) => {
	icon.className = iconClass + suffix;
};

const setIcon = () => {
	icon.className = iconClass + "on";
};

setIcon();