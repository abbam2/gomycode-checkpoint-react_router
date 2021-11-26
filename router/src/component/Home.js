import '../App.css';
import Moviegrid from './Moviegrid';
import React, { Component } from 'react';

class Home extends Component {
state={

  movie : [
 {id:1, title:"Aquaman", picture:"images/aquaman.jpg", link:"https://youtu.be/ivvOKs7B-Vw"}, 
 
{id:2, title:"Superman", picture:"images/man.jpeg", link:"https://youtu.be/Xw4VeR7tCxU"}, 

 {id:3, title:"Attack on titan", picture:"images/eren.jpeg", link:"https://youtu.be/Xw4VeR7tCxU"}, 
 
{id:4, title:"Spiderman", picture:"images/spidey.jpeg", link:"https://youtu.be/Xw4VeR7tCxU"}, 
 
{id:5, title:"Wolverine", picture:"images/wolverine.jpeg", link:"https://youtu.be/Xw4VeR7tCxU"}, 
 
{id:6, title:"Avengers", picture:"images/avengers.jpeg", link:"https://youtu.be/Xw4VeR7tCxU"}, 
]

}


  render() {
    return (
      <div className="Home">
        {this.state.movie.map(movie => <Moviegrid name={movie.title} picture={movie.picture} link={movie.link} />)}
      </div>
    );
  }
}

export default Home;
