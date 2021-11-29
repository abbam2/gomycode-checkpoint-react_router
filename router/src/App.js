import './App.css';
import Home from './component/Home';
import {Routes, Route} from "react-router-dom";
import Info from './component/Info';
import Header from './component/Header';
import Footer from './component/Footer';
import React, { Component } from 'react';

class App extends Component {
  state={

    movie : [
   {id:1, title:"Aquaman", picture:"images/aquaman.jpg", link:"https://www.youtube.com/embed/ivvOKs7B-Vw"}, 
   
  {id:2, title:"Superman", picture:"images/man.jpeg", link:"https://www.youtube.com/embed/IYdg1Y8S0N0"}, 
  
  {id:3, title:"Attack on titan", picture:"images/eren.jpeg", link:"https://www.youtube.com/embed/vQehygKHks0"}, 
   
  {id:4, title:"Spiderman", picture:"images/spidey.jpeg", link:"https://www.youtube.com/embed/nbp3Ra3Yp74"}, 
   
  {id:5, title:"Wolverine", picture:"images/wolverine.jpeg", link:"https://www.youtube.com/embed/AF_f8kl8lJQ"}, 
   
  {id:6, title:"Avengers", picture:"images/avengers.jpeg", link:"https://www.youtube.com/embed/6ZfuNTqbHE8"}, 
  ]
  
  }
  
  render() {
    return (
      <div className="App">
   <Header /> 

<Routes>
  <Route path="/" element={<Home movie={this.state.movie} />}/>
  <Route path="/info/:id" element={<Info movies={this.state.movie}/>}/>
</Routes>
<Footer />
      </div>
    );
  }
}

export default App;
