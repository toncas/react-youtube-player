import React from 'react';
import VideoListEntry from './VideoListEntry';

const VideoList = (props) => (
  <div className='col-4'>
    {props.videos.map(video => <VideoListEntry key={video.id.videoId} video={video}/>)} 
  </div>
);

export default VideoList;