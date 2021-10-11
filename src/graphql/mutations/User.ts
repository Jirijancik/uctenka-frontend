import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($newUser: UserInput!) {
    registerUser(newUser: $newUser) {
      token
      user {
        username
      }
    }
  }
`;
