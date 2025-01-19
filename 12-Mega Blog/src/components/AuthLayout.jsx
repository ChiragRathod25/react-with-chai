import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // if (authStatus === true) navigate("/");
    // else if (authStatus === false) navigate("/login");
    // setLoader(false);

    // let authValue = authStatus === true ? true : false;

    if (authStatus && authStatus !== authentication) 
        navigate("/login");
    else if (!authStatus && authStatus !== authentication) 
        navigate("/");
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
