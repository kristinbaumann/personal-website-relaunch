module.exports = {
  siteMetadata: {
    title: `Kristin Baumann - Personal Website `,
    description: `Meaningful things on the web: Frontend Development, Product Management, Data Visualisation, UX Design.`,
    author: `@kristin_baumann`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Personal Website of Kristin Baumann`,
        short_name: `Kristin Baumann`,
        start_url: `/`,
        background_color: `#0f0a0a`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/headshot_icon.png`,
      },
    },
  ],
}
