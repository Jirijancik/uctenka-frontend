import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    registerUser(email: $email, name: $name, password: $password) {
      _id
      name
    }
  }
`;
