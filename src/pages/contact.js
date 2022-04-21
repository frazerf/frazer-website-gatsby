import React from 'react'
import Helmet from 'react-helmet'

const Contact = () => (
  <>
    <Helmet>
      <body className="dark-header" />
      <title>Contact | 🍕 Frazer Findlater</title>
    </Helmet>
    <div className="section hero-section mob-spacer-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title gray-500">Hey there!</div>
            <h2>Wanna get in touch?<br/>Drop me a line below.</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="section small-top">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-9 col-12">
            <form className="contact" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact"/>
              <input placeholder="Full Name" id="name" type="text" name="name" />
              <input placeholder="Email Address" id="email" type="email" name="email" />
              <input placeholder="Favourite dog breed" id="dog" type="text" name="dog" /> 
              <textarea placeholder="Write your message here..." id="message" name="message"></textarea>
              <button className="cta" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
)

export default Contact
