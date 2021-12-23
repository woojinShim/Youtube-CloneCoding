import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('woojin');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCTYWd8Xpq2R7maawNxCvQsrP5h3T0scro", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  return <h1>Hello</h1>;
}

export default App;
