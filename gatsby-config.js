require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Beans.to`,
    description: `Toronto coffee roasters with beans available for home brewing`,
    author: `Mark Allen`,
    image: `/opengraph-image.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        host: `${process.env.CONTENTFUL_HOST}`,
        downloadLocal: true,
        pageLimit: 100
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `hzr7pqg`,
        }
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165380319-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beans-to`,
        short_name: `beans`,
        start_url: `/`,
        background_color: `#1B1918`,
        theme_color: `#1B1918`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
