const navCont = document.getElementById("navContainer");

const hideShowNav = (display) => {
	navCont.style.display = display;
};

const checkIfDesktop = () => {
	const width = window.innerWidth;
	if (width < 900) {
		hideShowNav("none");
	} else {
		hideShowNav("block");
	}
};

const toggleNav = () => {
	if (navCont.style.display === "none") {
		hideShowNav("block");
	} else {
		hideShowNav("none");
	}
};

checkIfDesktop();
