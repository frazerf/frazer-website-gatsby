import React from 'react'
import Fade from 'react-reveal/Fade';

export default function BlockTextArea({body}) {
  return (
    <Fade bottom duration={3000}>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-md-2 col-md-8">
              <div dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
