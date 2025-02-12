import Coffee from "./Coffee";

function App() {
  console.log("App.js rendering started ",Date.now())
  return (
    <>
    {
      console.log("First Coffee component -start")
    }
    <Coffee/>{
      console.log("First Coffee component -end")
    }
   <h1>Hii, from Chirag </h1>
   {
    console.log("Second Coffee component -start")
   }
    <Coffee/>
   {
    console.log("Second Coffee component -end")
   }
   {
    console.log("App.js rendering finished",Date.now())
   }
    </>
    
  );
}

export default App;