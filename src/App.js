// App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Review from './Components/Review';
import Book from './Components/Book';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Menu />
      <Review />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
