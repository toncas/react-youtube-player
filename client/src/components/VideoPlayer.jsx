import React from 'react'

const VideoPlayer = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className='video-player-title'>{props.currentVideo.snippet.title}</h1>
      <iframe width={"560"} height={"315"}
      src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`} 
      frameborder={"0"} allow={"autoplay; encrypted-media"}></iframe>
    </div>
  );
}

export default VideoPlayer;