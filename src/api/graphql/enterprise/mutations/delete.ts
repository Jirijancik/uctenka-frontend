import { gql } from '@apollo/client';
import { Enterprise } from '../../../../types/schemas/Enterprise';

export const DELETE_ENTERPRISE = gql`
  mutation deleteEnterprise($id: GetEnterpriseInput!) {
    deleteEnterprise(input: $id) {
      _id
    }
  }
`;

export type DeleteEnterpriseInput = { id: { _id: Enterprise['_id'] } };
export type DeleteEnterpriseResponse = { deleteEnterprise: { _id: Enterprise['_id'] } };
