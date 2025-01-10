import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(UserContext)

  const submitForm = (e) => {
    e.preventDefault()
    console.log(username," ",password);
    
    setUser({username,password})
  };
  return (
    <>
    <div  style={{display:"flex",gap:5,margin:"10px"}}>

      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        />
      <button onClick={submitForm} type="submit">Submit</button>
        </div>
    </>
  );
};
export default Login;
