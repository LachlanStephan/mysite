import { Util } from "../utils/util";
import { urls } from "./config.js";

export interface Data {
  ID: number;
  Title: string;
  Desc: string;
}

interface Section {
  title: string;
  description: string;
  section_id: number;
}

export interface Data extends Array<Data>{}

class Section extends Util {
	// private properties
	#main_1: HTMLElement | null;
  #util: Util;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#main_1 = document.getElementById("landing_main");
    this.#util = new Util();
	}

	// private methods

	// public methods
	async getSections() {
		try {
			this.#util.setLoader();
      let d = await fetch("localhost:8080/sections");
      d = await d.json();
      
			this.#util.removeLoader();
			this.#util.createSections(this.#main_1, d);
		} catch (e) {
			this.#util.setFetchFailedErrMsg(e, this.#main_1);
		}
	}

  // create func for sect
  createSections(ele: HTMLElement | null, obj: Section) {
    if (obj !== null && ele !== null) {
      Object.keys(obj).forEach((keys) => {
        const container: HTMLElement = document.createElement("section");
        const h3: HTMLElement = this.#createElements("h3", obj.title);
        const p: HTMLElement = this.#createElements("p", obj.description);
        const br: HTMLElement = document.createElement("br");

        ele.appendChild(container);
        ele.appendChild(h3);
        container.appendChild(p);
        container.appendChild(br);
      });
    }
  }
  async httpGet<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

	setFirstLinkActive() {
		this.setActiveLink("home");
	}
}

const s = new Section();
s.getSections();
s.setFirstLinkActive();
