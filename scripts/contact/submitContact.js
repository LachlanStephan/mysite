const mailResponseMsg = document.getElementById("mail_response");

const submitContactForm = (event) => {
	preventFormDefault(event);
	getFormData();
};

const getFormData = () => {
	const f = document.getElementById("c_form");
	const formData = new FormData(f);
	doSubmit(formData);
};

const doSubmit = async (d) => {
	try {
		let res = await fetch(urls.contact, {
			method: "POST",
			body: d,
		});
		res = await res.json();
		handleRes(res.status);
	} catch (e) {
		console.error(e);
		mailFailed();
	}
};

const handleRes = (status) => {
	switch (status) {
		case 202:
			mailSuccess();
			break;
		default:
			mailFailed();
			break;
	}
};

const mailSuccess = () => {
	mailResponseMsg.innerHTML = "Sent!";
	toggleDisplay(mailResponseMsg, "block");
	removeMailErrMsg();
};

const mailFailed = () => {
	mailResponseMsg.innerHTML = "Oops";
	toggleDisplay(mailResponseMsg, "block");
	removeMailErrMsg();
};

const removeMailErrMsg = () => {
	setTimeout(() => {
		toggleDisplay(mailResponseMsg, "none");
	}, 5000);
};
