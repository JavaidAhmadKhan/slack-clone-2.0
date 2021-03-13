import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase.js";
import { LoginContainer, LoginInnerContainer } from "./login.styles.js";

function Login() {
  const signIn = (e) => {
    e.preventDefault(); // prevents refreshing
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="Slack"
        />
        <h1>Sign in to the Clever Coder</h1>
        <p>relaxjavaid@gmail.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
