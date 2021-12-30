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
		projArray.push(res.data);
	}
	setProjects();
};
gHubData();

const setProjects = () => {
	const descPrefix = "Description: ";

	const sect = document.getElementById("sect");
	for (let i = 0; i < projArray.length; i++) {
		// HTML elements
		const container = document.createElement("div");
		const heading = document.createElement("h4");
		const desc = document.createElement("p");

		// Create container for each
		sect.appendChild(container);
		container.appendChild(heading);

		// Heading text
		heading.innerHTML = projArray[i].name;

		// Description text
		desc.innerHTML = descPrefix + projArray[i].description;
		heading.after(desc);
	}
};
