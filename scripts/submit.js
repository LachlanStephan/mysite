const submitForm = (event) => {
	if (typeof event.cancelable !== "boolean" || event.cancelable) {
		event.preventDefault();
		doVal();
	}
};

const doVal = () => {
	const f = document.getElementById("c_form");
	const formData = new FormData(f);
	const subject = formData.get("subject");
	const message = formData.get("message");

	if (
		typeof subject === "string" &&
		subject.length < 50 &&
		typeof message === "string" &&
		message.length < 100
	) {
		const data = {
			subject: subject,
			message: message,
		};
		doSubmit(data);
	}
};

const doSubmit = (d) => {
	console.warn(d); // post to api once built
};
