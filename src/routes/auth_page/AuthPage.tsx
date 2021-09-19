import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries/User";
import { REGISTER_USER } from "../../graphql/mutations/User";

export function AuthPage() {
  const [loginData, setLoginData] = useState();
  const [sessionData, setSessionData] = useState();
  const [logoutData, setLogoutData] = useState();

  const { error, loading, data, refetch } = useQuery(GET_USERS);

  const [registerUser] = useMutation(REGISTER_USER);

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

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <div>
      <div className="wrapper">
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

        <div className="data">{JSON.stringify(loginData)}</div>
      </div>

      {data &&
        data.getAllUsers.map((item: any) => (
          <div key={item._id}>
            {item.name} - {item.email} - {item._id} - {item.password}
          </div>
        ))}
    </div>
  );
}
