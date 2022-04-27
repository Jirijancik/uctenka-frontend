import { gql } from '@apollo/client';
import { Enterprise } from '../../../types/schemas/Enterprise';

export const GET_DASHBOARD_ENTERPRISES = gql`
  query enterprises {
    enterprises {
      _id
      name
    }
  }
`;

export interface DashboardEnterpriseResponse {
  enterprises: {
    _id: Enterprise['_id'];
    name: Enterprise['name'];
  }[];
}

export type DashboardEnterpriseRecord = DashboardEnterpriseResponse['enterprises'][number];
