const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: '🌴 Woop!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rb9oib50hgcl',
        accessToken: 'e1dfdea49375f5a6761cde63bea4fd73e24007e79203346c5219e473e8396abb'
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: '/src/images\/.*\.svg/'
          }
      }
    },
  ],
}
