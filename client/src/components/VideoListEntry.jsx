import React from 'react';

const VideoListEntry = (props) => {

  return (
    <div onClick={() => props.setCurrentVideo(props.video)} className="card" style={{width: "20rem"}}>
      <img className="card-img-top" src={props.video.snippet.thumbnails.medium.url} alt="Card image cap"/>
      <div className="card-block">
        <h4 className="card-title">{props.video.snippet.title}</h4>
        <p className="card-text">{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoListEntry;