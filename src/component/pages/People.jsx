import React from 'react'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

function People({person}) {
  return (
    <>
     <div className="row mb2">
        <div className="col-md-6">
          {/* <ItemList person={person}/> */}
        </div>
        <div className="col-md-6">
         
           <PersonDetails person={person}/>
          
        </div>
      </div>
 
  
    </>
  )
}

export default People