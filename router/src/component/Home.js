import '../App.css';
import Moviegrid from './Moviegrid';
import React, { Component } from 'react';

class Home extends Component {


  render() {
    return (
      <div className="Home">
        {this.props.movie.map(movie => <Moviegrid name={movie.title} picture={movie.picture} id={movie.id}  />)}
      </div>
    );
  }
}

export default Home;
