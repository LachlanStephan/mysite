import {request} from "https://cdn.pika.dev/@octokit/request";
import config from "./config.js";

const name = config.name;
const auth = config.auth;

const projNames = [config.proj1, config.proj2, config.proj3, config.proj4];

const projArray = [];

const gHubData = async () => {
	for (let i = 0; i < projNames.length; i++) {
		let url = "GET /repos/" + name + "/" + projNames[i];
		let res = await request(url, {
			method: "GET",
			auth: auth,
		});
		console.log(res.data);
		projArray.push(res.data);
	}
	setProjects();
};

const doGhubData = async () => {
	try {
		gHubData();
	} catch (e) {
		console.log(e);
	}
};
doGhubData();

const setProjects = () => {
	// const descPrefix = "Description: ";
	const sect = document.getElementById("sect");
	for (let i = 0; i < projArray.length; i++) {
		// HTML elements
		const container = document.createElement("div");
		const heading = document.createElement("h4");
		const desc = document.createElement("p");
		const url = document.createElement("a");

		// Add class to proj container
		container.classList.add("projContainer");

		// Create container for each
		sect.appendChild(container);
		container.appendChild(heading);

		// Heading text
		heading.innerHTML = projArray[i].name + ":";

		// Description text
		desc.innerHTML = projArray[i].description;
		heading.after(desc);

		// Add url
		url.href = projArray[i].html_url;
		url.innerHTML = "link";
		desc.after(url);

		if (
			projArray[i].description == null ||
			projArray[i].description == ""
		) {
			desc.innerHTML = "No description";
		}
	}
};
