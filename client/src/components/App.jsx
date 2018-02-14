import React, { Component } from 'react';
import youtubeApi from '../YouTube/YoutubeApi';
import VideoPlayer from './VideoPlayer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      testMessage: '',
      currentVideo: {
        snippet: {
          title: '',
        },

        id: {
          videoId: '',
        }
      },
      searchResultVideoLists: [],
    };

    youtubeApi.getSearchResults.bind(this);

  }

  componentDidMount() {
    //set default states

    youtubeApi.getSearchResults('alpha investments', res => {
      this.setState({
        searchResultVideoLists: res.data.items,
        currentVideo: res.data.items[0],
      });
    });
  }

  render() {
    return (
      <div>
        <div className='search-bar'>
          {`SEARCHBAR GOES HERE`}
        </div>
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