module.exports = {
  siteMetadata: {
    title: `Givi Weather`,
    description: `Simple but cool PWA weather app created by Giorgi Agladze`,
    author: `@giorgiagladze1`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Givi Weather`,
        short_name: `Givi Weather`,
        start_url: `/`,
        background_color: `#1f2c45`,
        theme_color: `#1f2c45`,
        display: `standalone`,
        icon: `src/images/icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
