import { gql } from '@apollo/client';
import { Enterprise } from '../../types/schemas/Enterprise';

export const GET_ENTERPRISES = gql`
  query enterprises {
    enterprises {
      _id
      city
      country
      name
      street
      unifiedVatNumber
    }
  }
`;

export interface EnterpriseResponse {
  enterprises: {
    _id: Enterprise['_id'];
    city: Enterprise['city'];
    country: Enterprise['country'];
    name: Enterprise['name'];
    street: Enterprise['street'];
    unifiedVatNumber: Enterprise['unifiedVatNumber'];
  }[];
}

export type EnterpriseRecord = EnterpriseResponse['enterprises'][number];
