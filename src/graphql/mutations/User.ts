import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    registerUser(
      email: $email
      username: $username
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        id
        email
        username
        lastName
        firstName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user
    }
  }
`;
