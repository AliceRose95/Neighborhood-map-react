import React, { Component } from 'react';

const List = ({ states, handleChange, onToggleOpen }) => {
  const { places, displayedPlaces } = states;

  return (
    <div>
    <form>
        <label>
          <select>
            <option id="all" value="all">All</option>
            <option id="riverside" value="riverside">Riverside</option>
            <option id="town" value="town">Town</option>
          </select>
        </label>
      </form>
    <div className="sidebarList">
      {displayedPlaces.map(place => (
      <li
        key={place.id}
        onClick={() => onToggleOpen(place.id, 'show')}
      >
        {place.name}
      </li>
      ))}
    </div>
    </div>
    );
  }



export default List;
