import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ToDo from './components/ToDo';
import About from './components/About'; 
import ToDoClassComp from './components/ToDoClassComp'; // Assuming you have this component
import Home from './components/Home'; // Assuming you have this component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/functional" element={<ToDo />} />
          <Route path="/class" element={<ToDoClassComp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
