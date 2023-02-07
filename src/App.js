import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [points, setPoints] = useState([{ x: undefined, y: undefined }]);
  const [popped, setPopped] = useState([{ x: undefined, y: undefined}]);

  function handlePlaceCirlce(e) {
    const { clientX, clientY } = e;
    console.log(clientX, clientY);
    setPoints([...points, { x: clientX, y: clientY },]);
  }
  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  }
  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }
  console.log(points);
  return (
    <>
      <button disabled={points.length === 0} onClick={() => handleUndo()}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={() => handleRedo()}>
        Redo
      </button>
      <div className="App" onClick={(e) => handlePlaceCirlce(e)}>
        <img src={logo} className="App-logo" alt="logo" />
        {points.map((point, idx) => (
          <div
            key={idx}
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>

    </>
  );
}

export default App;
