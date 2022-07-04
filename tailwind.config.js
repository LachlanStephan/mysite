module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				typing: "typing 1s steps(20, end) forwards",
			},
			keyframes: {
				typing: {
					from: { width: 0 },
					to: { width: 75 },
				},
			},
		},
	},
	plugins: [],
};
