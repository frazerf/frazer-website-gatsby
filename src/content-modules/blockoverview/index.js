import React from 'react'

export default function BlockOverview({title, overviewContent, specs, tech}) {
  return (
    <div className="spacer">
      <div className="container overview">
        <div class="row">
          <div class="col-12">
            <div dangerouslySetInnerHTML={{__html:title.childMarkdownRemark.html}} /> 
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-12">
            <div dangerouslySetInnerHTML={{__html:overviewContent.childMarkdownRemark.html}} /> 
          </div>
          <div class="offset-md-3 col-md-3 col-12">
            <div class="overview-specs">
              <div dangerouslySetInnerHTML={{__html:specs.childMarkdownRemark.html}} />
            </div>
            <div class="overview-specs">
              <div class="icon-hammer"></div>
              <div dangerouslySetInnerHTML={{__html:tech.childMarkdownRemark.html}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
