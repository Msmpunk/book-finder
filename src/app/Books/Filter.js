import React from 'react'
import './Filter.sass'
export const Filter = ({search, handleChange}) => {
  return (
    <div className="Filter filter">
        <div></div>
        <div >
          <form className="filter__container" onSubmit={search}>
            <input placeholder="Buscar ..." onChange={handleChange}></input>
            <button className='btn__fat__blue btn__custom' onClick={search}>
              <i className="fas fa-search"></i>
              <span> Buscar</span>
            </button>
          </form>
        </div>
    </div>
  );
}
