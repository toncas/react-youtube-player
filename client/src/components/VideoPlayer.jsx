import React from 'react'

const VideoPlayer = (props) => {
  return (
    <div>
      <h1>{props.testMessage}</h1>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/OQSNhk5ICTI" 
      frameborder="0" allow="autoplay; encrypted-media"></iframe>
    </div>
  );
}

export default VideoPlayer;