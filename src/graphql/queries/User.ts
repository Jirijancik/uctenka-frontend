import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  query loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`;
