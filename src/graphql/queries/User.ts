import { gql } from "@apollo/client";

// export const GET_CLIENTSxxx = gql`
//     query getAllClients({
//     name
//     adress
//     ico
//     _id
//   })
// `;

export const GET_USERS = gql`
  query getAllUsers {
    getAllUsers {
      name
      email
      password
      _id
    }
  }
`;
