module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				accent_grey: "#808080",
			},
			animation: {
				typing: "typing 0.5s steps(20, end) forwards",
			},
			keyframes: {
				typing: {
					from: { width: 0 },
					to: { width: 40 },
				},
			},
		},
	},
	plugins: [],
};
