import React from 'react'
import Reveal from 'react-reveal/Reveal'

export default function BlockOverview({ overviewContent, specs, websiteUrl }) {
  return (
    <div className="spacer">
      <Reveal fraction={0.3} duration={2000} effect="fadeInUp">
        <div className="container overview">
          <div className="row">
            <div className="col-md-7 col-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: overviewContent.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="offset-md-1 col-md-4 col-12">
              <div className="overview-specs">
                <div
                  dangerouslySetInnerHTML={{
                    __html: specs.childMarkdownRemark.html,
                  }}
                />
              </div>
              {websiteUrl !== null && (
                <div className="overview-specs">
                  <p>
                    <a
                      rel="noopener noreferrer"
                      className="cta-arrow"
                      href={websiteUrl}
                      target="_blank"
                    >
                      Visit Website{' '}
                      <svg className="i-arrow" viewBox="0 0 40 40">
                        {' '}
                        <circle cx="20" cy="20" r="19" />{' '}
                        <line x1="12.5" y1="20" x2="26.5" y2="20" />{' '}
                        <line x1="23.5" y1="15" x2="27.5" y2="20" />{' '}
                        <line x1="23.5" y1="25" x2="27.5" y2="20" />
                      </svg>
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
