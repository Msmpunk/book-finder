import React, { Component } from 'react'
import { Book }  from './Book/Book'
import { Filter }  from './Filter'
import './Books.sass';

export default class Books extends Component {
  render() {
    return (
      <div className="Books">
        <h1>Books</h1>
        <Filter/>
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
