const main_1 = document.getElementById("landing_main");

const fetchText = async() => {
	let data = await fetch('http://localhost:8888/mysite/api/text/text.php');
	data = await data.json();
	setTexts(data);
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

fetchText();
