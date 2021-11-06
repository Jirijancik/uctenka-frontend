import { gql } from '@apollo/client';
import { Client } from '../queries/Business';

export type ClientInput = Omit<Client, '_id'>;

export const CREATE_CLIENT = gql`
  mutation createClient($newClient: ClientInput!) {
    createClient(newClient: $newClient) {
      name
    }
  }
`;
