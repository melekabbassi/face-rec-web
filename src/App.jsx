import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState()

  const getApiData = async () => {
    const response = await fetch('http://127.0.0.1:8000/matches')
    .then(response => response.json())

    setData(response)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className="App">
      <h1>Face Recognition App</h1>
      <h2>Matches</h2>   
    </div>
  );
}

export default App;
