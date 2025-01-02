import React from 'react';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL || "https://default-api.com";

  return (
    <div className="App">
      <h1>Welcome to the React App</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}

export default App;
