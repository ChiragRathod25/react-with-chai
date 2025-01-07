import { useState } from "react";
import Button from "./assets/Button";

function App() {
  const [color, setColor] = useState("#454545");
  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className="h-screen" style={{ backgroundColor: color }}>
        <div
          className="fixed left-3 p-4 bg-white rounded-xl flex flex-col px-3 m-4 gap-2"
        >
          <Button color="Blue" onClick={()=>changeColor("Blue")} />
          <Button color="Red" onClick={()=>changeColor("Red")} />
          <Button color="Black" onClick={()=>changeColor("Black")} />
          <Button color="Green" onClick={()=>changeColor("Green")} />
          <Button color="olive" onClick={()=>changeColor("olive")} />
          <Button color="White" onClick={()=>changeColor("White")} />
          <Button color="Violet" onClick={()=>setColor("Violet")} />
          <Button color="purple" onClick={()=>setColor("purple")} />
        
        </div>
      </div>
    </>
  );
}

export default App;
