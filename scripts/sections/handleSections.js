const main_1 = document.getElementById("landing_main");

const fetchSections = async () => {
	let data = await fetch(urls.getSections);
	data = await data.json();
	createTexts(main_1, data.sections);
};
