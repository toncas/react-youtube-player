import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  render() {
    return (
      <div className='search'>
        <div className="input-group">
          <input 
          type="text" 
          className="form-control" 
          placeholder="Search YouTube..."
          onChange={this.handleSearch.bind(this)}/>
          <span className="input-group-btn">
            <button onClick={() => this.props.searchVideo(this.state.searchTerm)} className="btn btn-secondary" type="button">Search</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;