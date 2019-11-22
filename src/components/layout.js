import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulNavigation {
          navigationItems {
            id
            navigationTitle
            navigationLink
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <div className="outer-container">
          <div dangerouslySetInnerHTML="<script src='https://polyfill.webmonetization.org/polyfill.js' />" ></div>
          <div dangerouslySetInnerHTML="<script src='https://cdn.coil.com/donate.js' />" ></div>
          <div dangerouslySetInnerHTML="<script>window.WebMonetizationScripts.donate({paymentPointer: '$twitter.xrptipbot.com/frazerfindlater'})</script>" ></div>
          <Header nav={data} />
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
