import React from 'react';

// List of places and search box
const List = ({ states, searchHandler, onToggleOpen }) => {
  const { displayedPlaces} = states;

  return (
    <div>
      <div className="list-search" role="Menu">
          <input
          type="text"
          placeholder="Search bars..."
          onChange={(event)=> searchHandler(event.target.value)}
          />
        <div className="sidebarList">
          {displayedPlaces.map(place => (
            <li
              key={place.id}
              tabIndex="0"
              onClick={() => onToggleOpen(place.id, 'show')}
              onKeyPress={() => onToggleOpen(place.id, 'show')}
              role="Menuitem"
              tabIndex="0"
            >
              {place.name}
            </li>
          ))}
        </div>
     </div>
  </div>
  );
}



export default List;
