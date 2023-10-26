/** @type {import("prettier").Config} */
const config = {
	plugins: [
		require.resolve("@trivago/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	// Import sorting
	importOrder: [
		"^@/(.css)$",
		"^solid/(.*)$",
		"^@solid/(.*)$",
		"^react/(.*)$",
		"^@/(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	// Tailwind
	tailwindAttributes: ["class", "className"],
	tailwindFunctions: ["clsx", "cn", "twMerge"],
	tailwindConfig: "./tailwind.config.cjs",
};
module.exports = config;
