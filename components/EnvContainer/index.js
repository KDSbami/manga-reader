import { React } from "react";
import Error from "next/error";
import Container from "../Container";

function EnvComponent({ children, forEnv }) {
  return (
    <>
      {process.env.VERCEL_ENV === forEnv ? (
        <Container>{children}</Container>
      ) : (
        <Error statusCode={`sussy baka`} />
      )}
    </>
  );
}

export default EnvComponent;
