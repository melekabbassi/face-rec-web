import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState()
  const [image, setImage] = useState()

  const getApiData = async () => {
    const response = await fetch('http://127.0.0.1:8000/matches')
    .then(response => response.json())

    setData(response)
  }

  /* getImage gets images from /127.0.0.1:8000/matched_faces/filename.jpg
  *  and sets the image to the state 
  *  @param {string} filename - the name of the image file to be fetched
  * 
  */

  const getImage = async (filename) => {
    const response = await fetch(`http://127.0.0.1:8000/matched_faces/${filename}`)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))

    setImage(response)
  }

  useEffect(() => {
    getApiData()
  }, [])



  return (
    <div className="App">
      <h1>Face Recognition App</h1>
      <h2>Matches</h2>   
      <ul>
        {data?.matches.map((match, index= 0) => (
          <li key={match.id}>
            <h3>{match}</h3>

            <button onClick={() => getImage(index)}>Get Image</button>
          </li>
        ))}            
      </ul>

      <img src={image} alt="Matched Face" />

    </div>
  );
}

export default App;
