import React from 'react'
import img6 from '../../../assets/img/frankenstein-book.jpg'
import './Book.sass';

export const Book = ({data}) => {
  return (
    <div className="Book custom__card">
      <h3 className='lead'>Frankenstein</h3>
      <div className='book__img__content'>
        <img className='book__img' src={img6} alt='6_dias'/>
      </div>
      <p className='lead'>By: Mary Shelley</p>
      <p className='lead__gray'>Published By: anonymously</p>
      <button className='btn__table btn__detail'>See this Book</button>
    </div>
  );
}
