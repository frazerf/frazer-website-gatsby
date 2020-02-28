import React from 'react'
import Helmet from 'react-helmet'

const Contact = () => (
  <>
    <Helmet>
      <body className="dark-header" />
    </Helmet>
    <div className="section mob-spacer-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>The life and times.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <form className="contact" name="contact" method="POST" data-netlify="true">
              <input placeholder="Full Name" id="name" type="text" name="name" />
              <input placeholder="Email Address" id="email" type="email" name="email" />
              <input placeholder="Favourite dog breed" id="dog" type="text" name="dog" /> 
              <textarea placeholder="Write your message here..." id="message" name="message"></textarea>
              <button className="cta-arrow" type="submit">Send <svg className="i-arrow" viewBox="0 0 40 40"> <circle cx="20" cy="20" r="19"></circle> <line x1="12.5" y1="20" x2="26.5" y2="20"></line> <line x1="23.5" y1="15" x2="27.5" y2="20"></line> <line x1="23.5" y1="25" x2="27.5" y2="20"></line></svg></button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
)

export default Contact
