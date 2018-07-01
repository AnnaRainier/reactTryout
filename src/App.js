import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//const welcome = "welcome to react";

const movies = [
  {
    id: 1,
    title: 'star wars'
  },
  {
    id: 2,
    title: 'spider man'
  },
  {
    id: 3,
    title: '36th chamber of shaolin'
  },
  {
    id: 4,
    title: '5 Deadly venoms'
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        </header>
        { movies.map(movie => (
            <Movie key={movie.id} movie={movie}/> 
          ))}
      </div>
    );
  }
}


export default App;
