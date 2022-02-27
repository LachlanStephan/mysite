// Update this to come from api
const text = {
	interests:
		"Lorem Ipsum is simply dummy text of the printing an typesetting industry. Lorem Ipsum has been the industryu standard dummy text ever since the 1500s, when an unknown	printer took a galley of type and scrambled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.",
	direction:
		"mbled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset ",
	idealWork:
		"mbled it to make atype specimen book. It has survived not only five centuries,				but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with	the release of Letraset ",
};

const ele = {
	int: document.getElementById("int_text"),
	direct: document.getElementById("direct_text"),
	ideal: document.getElementById("ideal_text"),
};

const setText = () => {
	console.log(ele);
	ele.int.innerHTML = text.interests;
	ele.direct.innerHTML = text.direction;
	ele.ideal.innerHTML = text.idealWork;
};

setText();
