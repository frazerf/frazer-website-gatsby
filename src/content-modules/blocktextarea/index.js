import React from 'react'

export default function BlockTextArea({body}) {
  return (
    <div className="spacer">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8">
            <div dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}} />
          </div>
        </div>
      </div>
    </div>
  );
}
