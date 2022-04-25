const main_1 = document.getElementById("landing_main");

const fetchSections = async () => {
	setLoader();
	let data = await fetch(urls.getSections);
	data = await data.json();
	removeLoader();
	createTexts(main_1, data.sections);
};

setActiveLink("home");
