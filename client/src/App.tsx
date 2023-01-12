import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { PrimesPage } from './components/PrimesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes to automatically redirect users */}
          <Route path="prime" element={<PrimesPage/>}/>
          <Route path="" element={<Navigate to="/prime"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
