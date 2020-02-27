import React from 'react'
import Reveal from 'react-reveal/Reveal';

export default function BlockContentBlock({id, contentTitle, contentItem}) {
  
  return (
    <div className="spacer">
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{contentTitle}</h2>
            </div>
          </div>
          <div className="row content-block">
            {contentItem.map((i, id) =>
              <div key={id} className="col-4">
                <div className="item">
                  <h4>{i.title}</h4>
                  <div dangerouslySetInnerHTML={{__html:i.content.childMarkdownRemark.html}} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
