import React from 'react'
import lupa from '../../img/header/lupa.svg'

const Search = () => {

  return (
    <div className='search-contaner'>
        <div className="select-container">
            <select name="option">
                <option value="opcion1">amazon</option>
                <option value="opcion2">ebay</option>
                <option value="opcion3">emacy's</option>
            </select>
        </div>
        <div className="input-container">
            <input type="text"
                placeholder='Encuentra todo lo que no está en tu país'
            />
            <img src={lupa} alt="lupa" />
        </div>
    </div>
  )
}

export default Search