import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter,setCounter]=useState(21)
    //here couunter is a variable , it is similar to let counter=42
    // setCounter is a function to set values of it

    // here [] is const, so we can modify counter only by setCounter, not directly, 
    // but if we use let then we can directly modify value of counter
    
    // let counter=42;
    function incrementCounter(){
      // counter++;
      if(counter+1>20){
          alert(`You reacted maximum limit of 20`)
      }else{
        // counter++  // if it was let then we can direcly modify values, but not a good practice
        setCounter(counter+1)
      }
      console.log("increment Clicked",counter);
    }
    const decrementCounter=()=>{
      // counter--;
      if(counter-1 <0){
          alert(`Counter Value can't be negative`)
      }else{
        setCounter(counter-1)
      }
      console.log("Decrement Clicked",counter);
    }
  return (
    <>

      <h1>Chirag Rathod</h1>
      <div className="card">
        <p>Heyy, I welcome you all to my counter mini mini project <br/> Enjoy !!</p>
          <p>
            count is {counter}
            </p>
        <button onClick={incrementCounter} >
          Increment counter: {counter}
        </button>

        <button onClick={decrementCounter}>
          Decrement counter: {counter}
        </button>
      
      </div>
    
    </>
  )
}

export default App
