import { React, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const getAuthToken = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTokens = localStorage.getItem("auth");
    let tokenObject = {};
    if (typeof storedTokens === "string") {
      try {
        tokenObject = JSON.parse(storedTokens);
        tokenObject = tokenObject ?? {};
        console.log("whats happening here", tokenObject)
      } catch(e) {
        console.error("in catch: ",e);
        tokenObject = {};
      }
    } 
    return tokenObject;
  }

  return {};
};

const Token = ({ children }) => {
  const [tokens, _setTokens] = useState(getAuthToken);
  const setTokens = (tokenObject)=> {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("auth",JSON.stringify(tokenObject))
    }
    _setTokens(tokenObject)
  }

  const defaultContext = {
    tokens,
    setTokens,
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default Token;
