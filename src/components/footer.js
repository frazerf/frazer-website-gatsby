import React from 'react'
import {  } from "gatsby"
import Link from "gatsby-link"

class Footer extends React.Component {

  render(props) {
    const data = this.props.nav.contentfulNavigation.navigationItems

    return (
    <>
      <footer className="t-light">
        <div className="container">
          <div className="row footer-lets-talk">
            <div className="col-12 col-md-6">
              <h3>Looking for a developer?<br/><a href="/contact">Let's talk.</a></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul className="footer-nav">
                {data.map((item, i) =>
                  <li key={item.id}>
                    <Link to={item.navigationLink}>{item.navigationTitle}</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="footer-socials">
                <li>
                  <a href="https://www.facebook.com/frazer.findlater" rel="noopener noreferrer" target="_blank" className="icon-facebook">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/frazerf/" rel="noopener noreferrer" target="_blank" className="icon-instagram">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/frazer-findlater-b6116335/" rel="noopener noreferrer" target="_blank" className="icon-linkedin2">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-copyright">
            <div className="col-md-6 col-12">
                <p>&copy; Frazer Findlater</p>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
  }
}

export default Footer
