import { gql } from '@apollo/client';
import { User } from '../../types/schemas/User';

export const LOGIN_USER = gql`
  mutation login($user: LoginInput!) {
    login(input: $user) {
      _id
      email
    }
  }
`;

export interface LoginUserVariables {
  user: {
    email: string;
    password: string;
  };
}

export interface LoginUserData {
  login: {
    _id: User['_id'];
    email: User['email'];
  };
}
