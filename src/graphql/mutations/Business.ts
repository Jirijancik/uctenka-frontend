import { gql } from '@apollo/client';
import { Business } from '../queries/Business';

export type BusinessInput = Omit<Business, '_id'>;

export const CREATE_BUSINESS = gql`
  mutation createBusiness($newBusiness: BusinessInput!) {
    createBusiness(newBusiness: $newBusiness) {
      name
    }
  }
`;
