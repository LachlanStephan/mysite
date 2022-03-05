const ele = {
	t_1: document.getElementById("text_1"),
	t_2: document.getElementById("text_2"),
	t_3: document.getElementById("text_3"),
};

// Update this to come from api
const text = {
	text_1: "Lorem Ipsum is simply dummy text of the printing an typesetting industry. Lorem Ipsum has been the industryu standard dummy text ever since the 1500s, when an unknown	printer took a galley of type and scrambled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.",
	text_2: "mbled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset ",
	text_3: "mbled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset ",
};

const headings = {
	h_1: document.getElementById("site_header"),
	h_2: document.getElementById("heading_1"),
	h_3: document.getElementById("heading_2"),
	h_4: document.getElementById("heading_3"),
};

// Update this to come from api
const headingText = {
	h_text_1: "A simple site for testing new stuff and thoughts ...",
	h_text_2: "Here's what I'm currently interested in",
	h_text_3: "Where I'm currently headed",
	h_text_4: "Where I want to be headed",
};

const setHeadings = () => {
	headings.h_1.innerHTML = headingText.h_text_1;
	headings.h_2.innerHTML = headingText.h_text_2;
	headings.h_3.innerHTML = headingText.h_text_3;
	headings.h_4.innerHTML = headingText.h_text_4;
};

const setText = () => {
	ele.t_1.innerHTML = text.text_1;
	ele.t_2.innerHTML = text.text_2;
	ele.t_3.innerHTML = text.text_3;
};

setHeadings();
setText();
