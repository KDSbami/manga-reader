import { React, useEffect, useState } from "react";
import Error from "next/error";
import Container from "../Container";

function EnvComponent({ children, forEnv }) {
  const [environment, setEnvironment] = useState("");

  useEffect(() => {
    setEnvironment(process.env.ENVIRONMENT);
  },[]);
  
  return (
    <>
      { environment === forEnv ? (
        <Container>{children}</Container>
      ) : (
        <Error statusCode={`sussy baka`} />
      )}
    </>
  );
}

export default EnvComponent;