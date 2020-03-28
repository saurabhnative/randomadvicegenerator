import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, updateAdvice] = useState('');
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
          updateAdvice(data.slip.advice)
        })
  }
  useEffect(() => {
    fetchAdvice()
  }, [])
  return (
    <div className="app">
        <div className="card col-10 col-md-6 d-flex justify-content-center">
          <h2 className="heading">{advice}</h2>
          <button className="button learn-more" onClick={()=>fetchAdvice()}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
    </div>
  );
}

export default App;





