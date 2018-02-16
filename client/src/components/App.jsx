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

    this.searchVideo('dachshund vs penguin');
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

  searchVideo(query) {

    youtubeApi.getSearchResults(query, res => {
      this.setState({
        searchResultVideoLists: res.data.items,
        currentVideo: res.data.items[0],
      });
    });
  }

  render() {
    return (
      <div>
        <div className='container' >
          <Search searchVideo={this.searchVideo.bind(this)}/><br/>
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