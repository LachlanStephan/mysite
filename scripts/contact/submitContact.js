const submitContactForm = (event) => {
	preventFormDefault(event);
	doVal();
};

const doVal = () => {
	const f = document.getElementById("c_form");
	const formData = new FormData(f);
	// do some validation here
	doSubmit(formData);
};

const doSubmit = async (d) => {
	let res = await fetch("http://localhost/mysite/api/contact/contact.php", {
		method: "POST",
		body: d,
	});
	res = await res.json();
	handleRes(res.status);
	console.warn(res);
};

// update alerts to something not terrible
const handleRes = (status) => {
	switch (status) {
		case 202:
			alert(":')");
			break;
		case 500:
			alert(":'('");
	}
};
