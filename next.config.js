/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

// next.config.js
module.exports = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});
module.exports = withMDX({
	// Append the default value with md extensions
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
