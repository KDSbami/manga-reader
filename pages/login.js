import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import Button from "../src/components/ButtonV2";
import AuthContainer from "../src/components/AuthContainer";
import { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
        <div className="w-full h-full flex justify-center align-center">
        <div className="m-auto h-550px w-450px rounded-md border border-foreground bg-foreground shadow-md p-10">
          <p className="mb-6 text-4xl text-accent1">M.</p>
              <p className="mb-6">Login</p>
              <div className="">
                <p className="text-xs text-foreground-50 mb-3">USERNAME</p>
                <InputField
                  placeholder={""}
                  inputCallback={(e)=>{setUsername(e.target.value)}}
                  value={username}
                />
              </div>
              <div className="mt-8">
                <p className="text-xs text-foreground-50 mb-3">PASSWORD</p>
                <InputField
                  placeholder={""}
                  inputCallback={(e)=>{setPassword(e.target.value)}}
                  value={password}
                  type="password"
                />
              </div>
              <div className="my-20 h-52px">
              <Button
                animate={true}
                type="large"
                title="Login"
                onClick={() => {
                  console.log(`username is ${username}\npass is ${password}`);
                }}
              />
              </div>
        </div>
        </div>
    </Container>
  );
};

export default MyApp;
