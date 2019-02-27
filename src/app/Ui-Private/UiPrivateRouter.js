import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Books from '../Books/Books';

export default class UiPrivateRouter extends Component {
  render() {
    return (
      <div className='UiPrivateRouter wrapper'>
        <Route exact path="/" component={Books} />
      </div>
    );
  }
}
