const checkIfAdmin = (event) => {
	preventFormDefault(event);
	validatePass();
};

const validatePass = () => {
	const pass = document.getElementById("auth_form");
	const authData = new FormData(pass);
	const p = authData.get("pass");

	if (typeof p === "string" && p.length > 0) {
		submitPass(authData);
	}
};

const submitPass = async (authData) => {
	let res = await fetch(urls.auth, {
		method: "POST",
		body: authData,
	});
	res = await res.json();
	handleRes(res.status);
	console.warn(res);
};

const handleRes = (status) => {
	if (status === 202) {
		createBtns();
		console.log("approved");
	}
	if (status !== 202) {
		console.log("go away");
	}
};
