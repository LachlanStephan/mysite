class Blog extends Util {
	// private properties
	#main_2;

	// public properties

	// initialise values
	constructor() {
		super();
		this.#main_2 = document.getElementById("blog_main");
	}

	// private methods

	// public methods
	async getBlogs() {
		try {
			let data = await fetch(urls.getBlogs);
			data = await data.json();
			this.createTexts(this.#main_2, data.blogs);
		} catch (e) {
			this.setFetchFailedErrMsg(e, this.#main_2);
		}
	}
}

const b = new Blog();
b.getBlogs();
