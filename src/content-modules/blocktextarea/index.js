import React from 'react'

export default function BlockTextArea({body, columnSize}) {
  return (
    <div className="spacer">
      <div className="container">
        <div className="row">
        <div className={(columnSize ? 'col-12 col-md-10' : 'col-12')}>
            <div dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}} />
          </div>
        </div>
      </div>
    </div>
  );
}
