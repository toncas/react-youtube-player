import React from 'react'

const VideoPlayer = (props) => {
  return (
    <div className='video-player col-8'>
      <h4 className='video-player-title'>{props.currentVideo.snippet.title}</h4>
      <iframe width={"560"} height={"315"}
      src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`} 
      frameborder={"0"} allow={"autoplay; encrypted-media"}></iframe>
    </div>
  );
}

export default VideoPlayer;