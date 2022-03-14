const submitForm = (event) => {
	if (typeof event.cancelable !== "boolean" || event.cancelable) {
		event.preventDefault();
		doVal();
	}
};

const doVal = () => {
	const f = document.getElementById("c_form");
	const formData = new FormData(f);
	// do some validation here
	doSubmit(formData);
};

const doSubmit = async (d) => {
	const res = await fetch(
		"http://localhost:8888/mysite/api/contact/contact.php",
		{
			method: "POST",
			body: d,
		}
	);
	handleRes(res.status);
	console.warn(res);
};

// update alerts to something not terrible
const handleRes = (status) => {
	switch (status) {
		case 200:
			alert(":')");
			break;
		case 500:
			alert(":'('");
	}
};
