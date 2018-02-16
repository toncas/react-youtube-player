import React from 'react';

const VideoList = (props) => (
  <div className='col'>
    {props.videos.map(video => <div>{video.id.videoId}</div>)}
  </div>
);

export default VideoList;