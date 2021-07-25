const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const prod = process.env.NODE_ENV === "production";

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
					disable: prod ? false : true,
				},
			},
		],
	],
	{}
);
