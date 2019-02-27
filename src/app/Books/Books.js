import React, { Component } from 'react'
import { Book }  from './Book/Book'
import './Books.sass';

export default class Books extends Component {
  render() {
    return (
      <div className="Books">
        <h1>Books</h1>
        <div className='add__nversion'>
          <div></div>
          <button className='btn__fat__blue btn__custom'>+ Nueva Book</button>
        </div>
        <div className='container__Books'>
          <Book/>
          <Book/>
          <Book/>
          <Book/>
        </div>
      </div>
    );
  }
}
