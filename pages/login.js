import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import Button from "../src/components/ButtonV2";
import AuthContainer from "../src/components/AuthContainer";
import { postData } from "../src/services/apiServices";
import { React, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../src/components/Token";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [apiId, setApiId] = useState("api.mangadex.org");
  const [password, setPassword] = useState("");
  let { tokens, setTokens } = useContext(AuthContext);

  const onLoginSubmit = (e)=> {
    e.preventDefault();
    postData(apiId, "USER_LOGIN",
      {
        username:username,
        password:password
      }
    ).then((res)=>{

      if(res.result === 'ok') {
        setTokens(apiId,res.token);
      }
      console.log("login",res);
    }).catch(error => {
      console.error(error);
    })
  }

  useEffect(()=>{
    const isLoggedIn = tokens[apiId];
    if(isLoggedIn) {
      console.log("now");
      router.push("/");
    }
  },[tokens])

  return (
    <Container>
        <div className="w-full h-full flex justify-center align-center">
        <div className="m-auto h-550px w-450px rounded-md border border-foreground bg-foreground shadow-md p-10">
          <p className="mb-6 text-4xl text-accent1">M.</p>
              <p className="mb-6">Login</p>
              <form onSubmit={onLoginSubmit}>
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
                    customProps={{
                      autoComplete:"current-password"
                    }}
                  />
                </div>
                <div className="my-20 h-52px">
                <Button
                  animate={true}
                  type="submit"
                  title="Login"
                />
                </div>
              </form>
        </div>
        </div>
    </Container>
  );
};

export default Login;
