import React, { Component } from 'react';
import youtubeApi from '../YouTube/YoutubeApi';
import VideoPlayer from './VideoPlayer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      testMessage: '',
      currentVideo: {},
      searchResultVideoLists: [],
    };

  }

  componentDidMount() {
    //set default states
    youtubeApi.testAxios(null, (res) => {
      this.setState({
        testMessage: `${res.data.message} ${res.data.subtitle}`,
      });
    });

    youtubeApi.getSearchResults('alpha investments', function(res) {
      console.log(res);
    })

  }

  render() {
    return (
      <div>
        <div className='video-player'>
          <VideoPlayer testMessage={this.state.testMessage} currentVideo={this.state.currentVideo}/>
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