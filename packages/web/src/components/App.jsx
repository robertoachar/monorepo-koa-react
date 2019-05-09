import React from 'react';

const App = () => (
  <div className="App">
    <h1>Monorepo</h1>
    <button
      type="button"
      onClick={async () => {
        const response = await fetch('http://localhost:5000');
        const json = await response.json();
        console.log(json);
      }}
    >
      Click Me!
    </button>
  </div>
);

export default App;
