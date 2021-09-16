import { gql } from "@apollo/client";

// export const GET_CLIENTSxxx = gql`
//     query getAllClients({
//     name
//     adress
//     ico
//     _id
//   })
// `;

export const GET_CLIENTS = gql`
  query getAllClients {
    getAllClients {
      name
      adress
      ico
      _id
    }
  }
`;
