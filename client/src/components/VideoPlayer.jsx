import React from 'react'

const VideoPlayer = (props) => {
  return (
    <div className='video-player col-8'>
      <h4 className='video-player-title'>{props.currentVideo.snippet.title}</h4>
      <iframe width="640" height="390" 
      src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`} allowFullScreen></iframe>
    </div>
  );
}

export default VideoPlayer;