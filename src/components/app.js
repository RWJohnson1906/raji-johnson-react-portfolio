import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Raji Johnson React Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <h2>React Redux Router</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
