import React, { useEffect, useState } from 'react';
import Message from '../components/Message';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Vite + React + Express</h1>
      {data ? <Message text={data.message} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
