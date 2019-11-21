import React from 'react'
import Reveal from 'react-reveal/Reveal';

export default function BlockVideo({video}) {
  return (
    <div className="spacer">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12">
            <Reveal fraction={0.4} duration={2000} effect="fadeInUp">
              <div className="video">
                <video playsInline={true} controls={true}>
                  <source src={video.file.url} type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
