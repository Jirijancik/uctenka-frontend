import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query getClients {
    getAllClients {
      name
      adress
      ico
      _id
    }
  }
`;

export interface ClientsData {
  getAllClients: {
    name: string;
    adress: string;
    ico: string;
    _id: string;
  };
}
