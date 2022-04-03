import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($newUser: CreateUserInput!) {
    createUser(input: $newUser) {
      firstName
      lastName
      email
      _id
    }
  }
`;

export interface CreateUserVariables {
  newUser: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}

export interface CreateUserData {
  createUser: {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}
