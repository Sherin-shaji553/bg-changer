import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState("bg-dark");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div 
        className={`${bgColor}`} 
        style={{
          height: '100vh',
          backgroundColor: bgColor,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.5s ease',
        }}
      >
        <h1 
          className="text-center" 
          style={{
            color: '#fff',
            textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
            marginBottom: '50px',
            fontSize: '2.5rem',
          }}
        >
          Background Color Changing App
        </h1>
        <div className="buttons d-flex justify-content-center flex-wrap">
          <button
            onClick={() => changeColor("green")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Green
          </button>
          <button
            onClick={() => changeColor("red")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Blue
          </button>
          <button
            onClick={() => changeColor("brown")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'brown',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Brown
          </button>
          <button
            onClick={() => changeColor("orange")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Orange
          </button>
          <button
            onClick={() => changeColor("yellow")}
            className="py-3 px-5 m-2 rounded"
            style={{
              backgroundColor: 'yellow',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
