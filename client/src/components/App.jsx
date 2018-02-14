import React, { Component } from 'react';
import youtubeApi from '../YouTube/YoutubeApi';
import VideoPlayer from './VideoPlayer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentVideo: {},
      searchResultVideoLists: [],
    };

  }

  componentDidMount() {
    {console.log('Component did mount...')}
    {youtubeApi.getVideo('thing');}

    //set default states

  }

  render() {
    return (
      <div>
        <div className='video-player'>
          <VideoPlayer currentVideo={this.state.currentVideo}/>
        </div>
      </div>
    );
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

}

export default App;