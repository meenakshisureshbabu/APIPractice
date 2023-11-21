import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Word() {

    const [textvalue,setTextValue] = useState("hi");

    const handleChange = (event) => {
        //console.log("TEXT VALUE:",event.target.value)
        setTextValue(event.target.value);
    }



  return (
    <>
    <div className='dictionary-div'>
        <div>
            <h1>SIMPLE DICTIONARY</h1>
        </div>
        <div className='searchtext-div'>
            <label>Enter your word here...</label>
            <input type='text' id="textval" onChange={handleChange}></input>
            
            <Link to={`/searchword/${textvalue}`}>
            <button type="Submit">Search</button>
            </Link>
        </div>

    </div>
    </>
  )
}

export default Word