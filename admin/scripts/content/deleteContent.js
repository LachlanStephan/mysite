const deleteContent = (id, type) => {
	if (confirm("delete?")) {
		doDelete(id, type);
	}
};

const doDelete = async (id, type) => {
	let url;
	if (type === "blog") {
		url = urls.deleteBlog;
	} else {
		url = urls.deleteSection;
	}
	const request = await fetch(url, {
		method: "POST",
		body: id,
	});
	const res = await request;
	if (res.status === 202) {
		alert("gone");
	} else {
		alert("oops");
	}
};
