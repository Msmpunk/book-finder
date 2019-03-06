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
      inputData: '',
      loader: false
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  search = async (event) => {
    if(this.state.inputData===''){
      event.preventDefault();
      return alert('Please enter a value');
    }
    event.preventDefault();
    this.setState(() => {
      return { 
        loader: true,
        booksList: []
       }
    });
    const result = await axios.get(`https://book-back-end.herokuapp.com/api/v1/finder?bookName=${this.state.inputData}`);
    this.setState(() => {
      return { 
        booksList: result.data.books,
        loader: false,
      }
    });

  };

  handleChange = event => {
    this.setState({
      inputData: event.target.value
    });
  };

  render() {
    let element;
    const loaderBox = <div className="loader__stl"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>;
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
        {
          this.state.loader ? loaderBox : false
        }
        <div className='container__Books'>
          {
            element
          }
        </div>
      </div>
    );
  }
}
