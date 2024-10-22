import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home';

function App() {
  const [rotation, setRotation] = useState(0); 

  const handleNextPage = () => {
    
    setRotation((prevRotation) => (prevRotation + 90) % 360); 
  };

  return (
    <>
      <GlobalStyles rotation={rotation} />
      <div className="background" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }}>
        
      </div>
      {/* <div className="background" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }}>
        
      </div>
      <div className="App">
        <h1>My Portfolio</h1>
        <button onClick={handleNextPage}>Ir a About Me</button>
      </div> */}
      <Home />
    </>
  );
}

export default App;
