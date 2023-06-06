import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <header>
        <h1>Hello World!</h1>
        <Link to="/greetings">Greetings</Link>
        <Routes>
          <Route path="greetings" element={<Greetings />} />
        </Routes>
      </header>
    </>
  );
}

export default App;
