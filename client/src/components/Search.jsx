import React from 'react';

const Search = (props) => (
  <div className='search'>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search YouTube..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button">Search</button>
      </span>
    </div>
  </div>
);

export default Search;