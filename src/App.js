import React, { useState } from "react";
import Header from './components/mainStr/Header'
import Main from './components/mainStr/Main'

function App() {
  const [what, setWhat] = useState('?');


  return (
    <div className="App">
      <Header reloadPage={refreshPage} displayNumber={what} />
      <Main applyWhat={applyWhat} />
    </div>
  );
  
  function applyWhat(item) {
    setWhat(item)
  }

  function refreshPage() {
    window.location.reload()
  }
}

export default App;
