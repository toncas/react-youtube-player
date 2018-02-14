import key from './APIKey';
import axios from '../../lib/axios'

const _ytPath = `https://www.googleapis.com/youtube/v3`

const YoutubeApi = {
  testAxios: (query, callback) => { //can delete later.
    axios.get('http://foaas.com/awesome/Antonio').then(function(res) {
      callback(res);
    });
  },

  getSearchResults: function(query, cb) {
    axios.get(`${_ytPath}/search`, {
      params: {
        'maxResults': 5,
        'part': 'snippet, id',
        'q': query || 'dogs',
        'key': key,
      }
    }).then(res => {
      cb(res);
    });
  },
}

export default YoutubeApi