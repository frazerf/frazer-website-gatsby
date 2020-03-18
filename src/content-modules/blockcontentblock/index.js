import React from 'react'
import Reveal from 'react-reveal/Reveal';

export default function BlockContentBlock({id, contentTitle, contentItem}) {
  
  return (
    <div className="spacer">
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <div className="container-large">
          {contentTitle !== null &&
            <div className="row">
              <div className="col-12">
                <h2>{contentTitle}</h2>
              </div>
            </div>
          }
          <div className="row content-block">
            <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
              {contentItem.map((i, id) =>
                <div key={id} className="col-md-4 col-12">
                  <div className="item">
                    <h5>{i.title}</h5>
                    <div dangerouslySetInnerHTML={{__html:i.content.childMarkdownRemark.html}} />
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
