import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries/User";
import { LOGIN_USER, REGISTER_USER } from "../../graphql/mutations/User";

export function AuthPage() {
  const [loginData, setLoginData] = useState();
  const [sessionData, setSessionData] = useState();
  const [logoutData, setLogoutData] = useState();

  const { error, loading, data, refetch } = useQuery(GET_USERS);

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
      .then(() => refetch())
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

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div>
      <div
        style={{
          margin: 80,
          padding: 20,
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <h2>Register new user</h2>
        <form onSubmit={handleRegisterUser}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="jane.doe@example.com" />
          <label htmlFor="name">Name</label>
          <input type="name" id="name" placeholder="name" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="****" />

          <button type="submit">Register</button>
        </form>
      </div>

      <div
        style={{
          margin: 80,
          padding: 20,
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="jane.doe@example.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="****" />

          <button type="submit">Login</button>
        </form>
      </div>

      <div
        style={{
          margin: 80,
          padding: 20,
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <h2>REGISTERED USERS</h2>
        {data &&
          data.getAllUsers.map((item: any) => (
            <div key={item._id}>
              {item.name} - {item.email} - {item._id} - {item.password}
            </div>
          ))}
      </div>
    </div>
  );
}
