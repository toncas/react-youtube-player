import key from './APIKey';
import axios from '../../lib/axios'

const YoutubeApi = {
  getVideo: (query) => {
    axios.get('http://foaas.com/horse/antonio').then(function(res) {
      console.log(res.data);
    });
  }
}

export default YoutubeApi