import React from 'react'
import axios from'axios'
import  {useState} from 'react';
// import './App.css';


function Prog1() {
  const[color, setColor] = useState('white');
      const changeColor = () => {
        
        const newColor = getRandomColor();
        setColor(newColor);
      };
    
      
      const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
  return (
    
    <div>
      
     
        <div className="App">
          <h1>Color Changer</h1>
          <button onClick={()=>{
            setColor(true)
            console.log(color)
          }}></button>
          <div className="output" style={{ backgroundColor: color }}>
            Current Color: {color}
          </div>
        </div>
    
    
    export default App;
    </div>
  )
        }

export default Prog1;