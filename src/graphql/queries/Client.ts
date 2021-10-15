import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query getClients {
    getClients {
      name
      adress
      ico
      _id
    }
  }
`;

export interface ClientsData {
  getClients: {
    name: string;
    adress: string;
    ico: string;
    _id: number;
  }[];
}
