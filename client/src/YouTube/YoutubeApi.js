import key from './APIKey';
import axios from '../../lib/axios'

const _ytPath = `https://www.googleapis.com/youtube/v3`

const YoutubeApi = {

  getSearchResults: (query, cb) => {
    axios.get(`${_ytPath}/search`, {
      params: {
        'maxResults': 5,
        'part': 'snippet, id',
        'type': 'video',
        'q': query || 'dogs',
        'key': key,
      }
    }).then(res => {
      cb(res);
    });
  },
}

export default YoutubeApi;