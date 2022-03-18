const checkIfAdmin = (event) => {
	if (typeof event.cancelable !== "boolean" || event.cancelable) {
		event.preventDefault();
		validatePass();
	}
};

const validatePass = () => {
	const pass = document.getElementById("auth_form");
	const authData = new FormData(pass);
	const p = authData.get("pass");

	if (typeof p === "string" && p.length > 0) {
		sumbitPass(p);
	}
};

const sumbitPass = async (pass) => {
	const res = await fetch(
		"http://localhost:8888/mysite/api/auth/checkIfAdmin.php",
		{
			method: "POST",
			body: pass,
		}
	);
	handleRes(res.status);
	console.warn(res);
};

const handleRes = (status) => {
	if (status === 200) {
		console.log("approved");
	}
	if (status !== 200) {
		console.log("go away");
	}
};
