import React, { Component } from 'react'
import { Book }  from './Book/Book'
import { Filter }  from './Filter'
import axios from 'axios';
import './Books.sass';

export default class Books extends Component {
  constructor(props){

    super(props);

    this.state = {
      booksList: null,
      inputData: ''
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  search = async (event) => {
    event.preventDefault();
    const result = await axios.get(`http://localhost:4000/api/v1/finder?bookName=${this.state.inputData}`);
    console.log(result.data.books)
    this.setState(() => {
      return { booksList: result.data.books }
    });

  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      inputData: event.target.value
    });
  };

  render() {
    let element;
    console.log(this.state.booksList)
    if(!this.state.booksList){
      element = <h1>Search a Book</h1>
    }

    if(this.state.booksList) {
      element = this.state.booksList.map(data =>
        <Book key={data.id} data= {data}></Book>
       );
    }
    return (
      <div className="Books">
        <h1>Books</h1>
        <Filter search={this.search} handleChange={this.handleChange} />
        <div className='container__Books'>
          {
            element
          }
        </div>
      </div>
    );
  }
}
