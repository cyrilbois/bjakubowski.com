module.exports = {
	siteMetadata: {
		title: `Bartosz Jakubowski Blog`,
		description: `Blog made with GatsbyJS`,
		author: `b-jakubowski`,
		siteUrl: `http://www.bjakubowski.com`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			},
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'material icons',
					'roboto:300,400,500,700',
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
			},
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'bjakubowski-blog',
				acl: null
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: "pages",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
