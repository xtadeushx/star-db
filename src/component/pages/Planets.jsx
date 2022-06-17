import React from 'react'
import ItemList from '../item-list'
import PlanetDetails from '../planet-details'

function Planets() {
  return (
    <>  
     <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
         
         <PlanetDetails/>
          
        </div>
      </div>
   
    
    </>
 
  )
}

export default Planets