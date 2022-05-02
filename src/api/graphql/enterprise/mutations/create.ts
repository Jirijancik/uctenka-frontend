import { gql } from '@apollo/client';
import { Enterprise } from '../../../../types/schemas/Enterprise';

export const CREATE_ENTERPRISE = gql`
  mutation createEnterprise($newEnterprise: CreateEnterpriseInput!) {
    createEnterprise(input: $newEnterprise) {
      _id
    }
  }
`;

export type CreateEnterpriseInput = { newEnterprise: Omit<Enterprise, '_id' | 'user' | 'accountBalance'> };
export type CreateEnterpriseResponse = { createEnterprise: { _id: number } };
