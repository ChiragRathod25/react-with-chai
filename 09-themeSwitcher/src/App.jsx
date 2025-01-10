import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const htmlClasses = document.querySelector("html").classList;
    htmlClasses.remove('dark','light');   
    htmlClasses.add(themeMode);
  }, [themeMode]);

  const toggleThemeMode = (newMode) => {
    setThemeMode(newMode);
  };

  return (
    <ThemeContextProvider value={{ themeMode, toggleThemeMode }}>
    
      {/* <h1>HIi</h1> */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />

          <div className="w-full max-w-sm mx-auto">{/* Card  */}</div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
