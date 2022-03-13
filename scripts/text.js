const main_1 = document.getElementById("landing_main");

// fetch from api once built
const texts = {
	text_1: {
		heading: "Heading",
		content: "Some juicy stuff",
	},
	text_2: {
		heading: "Other heading",
		content: "Mooore content",
	},
	text_3: {
		heading: "3rd one",
		content: "Hello there",
	},
};

const setTexts = (obj) => {
	Object.keys(obj).forEach((key) => {
		const sect = document.createElement("section");
		const h3 = document.createElement("h3");
		const p = document.createElement("p");
		const br = document.createElement("br");

		h3.innerHTML = obj[key].heading;
		p.innerHTML = obj[key].content;

		main_1.appendChild(sect);
		sect.appendChild(h3);
		sect.appendChild(p);

		sect.after(br);
	});
};

setTexts(texts);
