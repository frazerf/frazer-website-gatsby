import React from 'react'

export default function BlockVideo({video}) {
  return (
    <div className="spacer">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 col-12">
            <div className="video">
              <video playsInline={true} controls={true}>
                <source src={video.file.url} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
