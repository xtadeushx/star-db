import React from 'react';
import ItemList from '../item-list';
import StarshipDetails from '../starship-details';

function Starships() {
  return (
    <>
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <StarshipDetails />
        </div>
      </div>
    </>
  );
}

export default Starships;
