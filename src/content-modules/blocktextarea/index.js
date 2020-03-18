import React from 'react'
import Reveal from 'react-reveal/Reveal';

export default function BlockTextArea({body, columnSize}) {
  return (
    <div className="spacer">
      <Reveal fraction={0.6} duration={2000} effect="fadeInUp">
        <div className="container-main">
          <div className="row">
            <div className={(columnSize ? 'col-12 col-md-9' : 'col-12')}>
              <div dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}} />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
