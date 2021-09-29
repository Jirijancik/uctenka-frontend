import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "../../graphql/mutations/User";
import { LoginForm } from "./components/LoginForm";

export function AuthPage() {
  const [showingLogin, setShowingLogin] = useState(true);
  const [loginData, setLoginData] = useState();
  const [sessionData, setSessionData] = useState();
  const [logoutData, setLogoutData] = useState();

  //const { error, loading, data, refetch } = useQuery(GET_USERS);

  const [registerUser] = useMutation(REGISTER_USER);

  const [loginUser] = useMutation(LOGIN_USER);

  async function handleRegisterUser(e: React.SyntheticEvent) {
    e.preventDefault();

    const target: any = e.target;
    const email = target.email.value;
    const name = target.name.value;
    const password = target.password.value;

    registerUser({
      variables: {
        email,
        name,
        password,
      },
    })
      //   .then(() => refetch())
      .catch((error) => console.log(error));
  }

  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();

    const target: any = e.target;
    const email = target.email.value;
    const password = target.password.value;

    loginUser({
      variables: {
        email,
        password,
      },
    })
      .then((result) => console.log(result, "result"))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
}
