class Auth extends CreateOptions {
	// private properties

	// public properties

	// initialise values
	constructor() {
		super();
	}

	// private methods
	checkIfAdmin = (event) => {
		this.preventFormDefault(event);
		this.validatePass();
	};

	validatePass = () => {
		const pass = document.getElementById("auth_form");
		const authData = new FormData(pass);
		const p = authData.get("pass");

		if (typeof p === "string" && p.length > 0) {
			this.submitPass(authData);
		}
	};

	submitPass = async (authData) => {
		let res = await fetch(urls.auth, {
			method: "POST",
			body: authData,
		});
		res = await res.json();
		this.handleRes(res.status);
	};

	handleRes = (status) => {
		if (status === 202) {
			this.createBtns();
		}
		if (status !== 202) {
			location.href = urls.home;
		}
	};

	// public methods
}

const a = new Auth();
