/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'data',
        path:`${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CAQG",
        short_name: "My site",
        start_url: "/",
        background_color: "#1560bd",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/imgs/curriculum.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
