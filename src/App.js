import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App' style={{ height: 'auto' }}>
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
