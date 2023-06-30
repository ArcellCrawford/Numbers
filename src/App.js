import { useState } from "react";
import React from "react";
import "./App.css";
import img1 from "./thumbs_up-removebg-preview.png"
// Dont need the import under this
// import Display from "./Display";

const Create = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [highest, setHighest] = useState('AND THE HIGHEST NUMBER IS ...');
  const [lowest,setlowest] = useState('The lowest number is...')
  const[Middle,setMiddle] = useState('The middle number is...')
//Handles submissions when the button is pressed 
  const handleSubmit = (e) => {
    e.preventDefault();
    const numbers = [Number(first), Number(second), Number(third)];
    console.log(numbers);
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers)
    const sortedNumbers= numbers.sort(function(a, b){return a-b})
    const midNumber = sortedNumbers[1]
    console.log(sortedNumbers)
    //Set the Highest, Middle, and lowest number
    setHighest(maxNumber);
    setlowest(minNumber);
    setMiddle(midNumber)
  }
  return (
    <div className="create">
      <h2 className="center">Sorted Numbers</h2>
      <h3 className = 'center2'>Input three different numbers and I will list them least to greatest!</h3>
      <form onSubmit={handleSubmit}>
      <div className="box">
        <label className="font">First Number</label>
        <input
          type="number"
          required
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br/>
        <br/>
        <label>Second number</label>
        <input
          type="number"
          required
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
        <br/>
        <br/>
        <label>Third Number</label>
        <input
          type="number"
          required
          value={third}
          onChange={(e) => setThird(e.target.value)}
        />
         </div>
        <br/>
        <br/>
        
        <button>Get sorted list</button>
        
        <br/>    
      </form>
      
      <h3>{lowest}</h3>
      <br/>
      <h2>{Middle}</h2>
      <br/>
      <h1>{highest}</h1>
      
      <img src={img1} alt="Thumbs Up" className="img"/>
       
    </div>
  );
}
export default Create;