import { gql } from '@apollo/client';
import { Client } from '../queries/Client';

export type ClientInput = Omit<Client, '_id'>;

export const CREATE_CLIENT = gql`
  mutation createClient($newClient: ClientInput!) {
    createClient(newClient: $newClient) {
      name
    }
  }
`;
