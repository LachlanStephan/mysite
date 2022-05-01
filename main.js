const fetchSiteData = async () => {
	await Promise.all([fetchSections(), getBlogs()]);
};

const checkTheme = () => {
	const body = document.getElementById("body");
	const curr_theme = localStorage.getItem("current_mode");
	if (curr_theme !== null) {
		body.className = curr_theme;
		setCorrectIcon(curr_theme);
	}
};

const setCorrectIcon = (curr_theme) => {
	console.warn(curr_theme);
	if (curr_theme === "lightMode") {
		toggleIcon("off");
	} else {
		toggleIcon("on");
	}
};

checkTheme();
fetchSiteData();
