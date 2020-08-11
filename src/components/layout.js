import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ReactGA from 'react-ga'
import Header from './header'
import Footer from './footer'

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-175184002-1')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

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
          <Header nav={data} />
          {children}
          <Footer nav={data} />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
