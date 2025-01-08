import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()

    // passwordRef.current?.setSelectionRange(0,10)

    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let temp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) temp += "0123456789";
    if (charAllowed) temp += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * temp.length);
      pass += temp.charAt(charIndex);
    }
    //console.log(pass);

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator]);
  
  return (
    <>
      <div className="w-full h-screen bg-slate-900">
        <div className="fixed w-6/12 top-8 left-1/4 bg-blackc rounded-xl h-40 bg-slate-400">
          <div className="h-1/2 py-2 px-2 flex gap-2">
            <input
              type="text"
              name="password"
              className="ng-white rounded-lg w-full px-1 text-2xl "
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              type="button"
              className="bg-orange-600 p-4 text-center rounded-lg text-black font-semibold  text-2xl"
              onClick={copyPasswordToClipboard}
          >
              Copy
            </button>
          </div>
          <div className="flex gap-2 p- grow  m-2">
            <div className="subcontainer flex gap-2 p-2 ">
              <input
                type="range"
                name="length"
                id="length"
                max={100}
                min={0}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="bg-orange-600 "
              />
              <label name="length"> Length: {length} </label>
            </div>
            <div className="subcontainer flex gap-2 p-2 ">
              <input
                id="numberAllowed"
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberAllowed"> Number</label>
            </div>
            <div className="subcontainer flex gap-2 p-2 ">
              <input
                id="charAllowed"
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="charAllowed"> Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
