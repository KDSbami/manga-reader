import {React} from "react";

const AuthContainer = ({ children, token }) => {
    
  return (token?<>{children}</>:null);
};

export default AuthContainer;
