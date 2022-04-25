const fetchSiteData = async () => {
	await Promise.all([fetchSections(), getBlogs()]);
};

fetchSiteData();
