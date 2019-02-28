import React from 'react'
import './Filter.sass'
export const Filter = ({data}) => {
  return (
    <div className="Filter filter">
        <div></div>
        <div className="filter__container">
          <input placeholder="Buscar ..."></input>
          <button className='btn__fat__blue btn__custom'>
            <i className="fas fa-search"></i>
            <span> Buscar</span>
          </button>
        </div>
    </div>
  );
}
