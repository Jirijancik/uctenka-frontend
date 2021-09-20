import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    registerUser(email: $email, name: $name, password: $password) {
      _id
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
    }
  }
`;
