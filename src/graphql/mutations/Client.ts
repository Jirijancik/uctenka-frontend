import { gql } from '@apollo/client';
import { Business } from '../queries/Business';

export type BusinessInput = Omit<Business, '_id'>;

export const CREATE_BUSINESS = gql`
  mutation createBusiness($newnBusiness: BusinessInput!) {
    createBusiness(newClient: $newBusiness) {
      name
    }
  }
`;
