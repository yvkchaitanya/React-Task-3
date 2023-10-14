import logo from './logo.svg';
import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
       <ColorPicker colors={['red', 'green', 'blue','yellow','pink','orange','violet']} />
    </div>
  );
}

export default App;