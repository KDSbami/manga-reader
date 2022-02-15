import { React, createContext, useState, useEffect } from "react";
import supportedApis from '../../constants/apiEndpoints';

export const AuthContext = createContext();

const getAuthToken = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTokens = localStorage.getItem("auth");
    let tokenObject = {};
    if (typeof storedTokens === "string") {
      try {
        tokenObject = JSON.parse(storedTokens);
        tokenObject = tokenObject ?? {};
      } catch(e) {
        console.error("in catch: ",e);
        tokenObject = {};
      }
    }
    if(!storedTokens) {
      localStorage.setItem("auth",JSON.stringify(tokenObject));
    }
    return tokenObject;
  }

  return {};
};

const Token = ({ children }) => {
  const [tokens, _setTokens] = useState(getAuthToken);
  const setTokens = (apiId, apiToken)=> {

    let tokenObject = {};
    if(typeof tokens === "object") {
      tokenObject = tokens;
    }
    const storeTokenCallback = supportedApis[apiId]["callbacks"]["storeTokenCallback"];
    if(storeTokenCallback) {
      tokenObject = storeTokenCallback(tokenObject, apiToken);
    }

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
