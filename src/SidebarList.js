import React, { Component } from 'react';
import placeInfo from './places.json';
import Map from './Map.js';

class List extends Component {
  constructor(props) {
        super()
    }

  render() {
    const places = placeInfo

  return (
    <div>
    <form onSubmit={this.handleSubmit}>
        <label>
          <select>
            <option value="all">All</option>
            <option value="riverside">Riverside</option>
            <option value="town">Town</option>
          </select>
        </label>
      </form>
    <div className="sidebarList">
      {places.map(place => (
      <li key={place.id} onClick={console.log('NO')}>{place.name}</li>
      ))}
    </div>
    </div>
    );
  }
}

export default List;
