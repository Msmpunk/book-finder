import React from 'react'

import img from '../../../assets/img/no-img.png'

import './Book.sass';

export const Book = (data) => {
  const bookInfo = data.data;

  let picture = data.data.imageLinks === false ? img : bookInfo.imageLinks;
  console.log(picture)
  return (
    <div className="Book custom__card">
      <h3 className='lead'>{bookInfo.title}</h3>
      <div className='book__img__content'>
        <img className='book__img' src={ picture } alt='book-img'/>
      </div>
      <p className='lead'>Authors: {bookInfo.authors}</p>
      <p className='lead__gray'>Published By: {bookInfo.publisher}</p>
      <button className='btn__table btn__detail'>
      <a href={bookInfo.previewLink} target="_blank" rel="noopener noreferrer">See this Book</a>
      </button>

    </div>
  );
}
