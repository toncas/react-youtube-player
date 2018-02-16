import React, { Component } from 'react';
import youtubeApi from '../YouTube/YoutubeApi';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import VideoList from './VideoList';

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
  }

  componentDidMount() {
    //set default states

    youtubeApi.getSearchResults('dogs', res => {
      this.setState({
        searchResultVideoLists: res.data.items,
        currentVideo: res.data.items[0],
      });
    });
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

  render() {
    return (
      <div>
        <div className='container' >
          <Search/> <br/>
        </div>
        
        <div className='container'>
          <div className='row'>
            <VideoPlayer currentVideo={this.state.currentVideo}/>
            <VideoList setCurrentVideo={this.setCurrentVideo.bind(this)} videos={this.state.searchResultVideoLists}/>
          </div>
        </div>
        
      </div>
    );
  }

}

export default App;