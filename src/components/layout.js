import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { TransitionPortal } from "gatsby-plugin-transition-link";

import Sidebar from './sidebar'

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
          <TransitionPortal level="top">
            <Sidebar nav={data} siteTitle={data.site.siteMetadata.title} />
          </TransitionPortal>
          <div className="main-content">
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
