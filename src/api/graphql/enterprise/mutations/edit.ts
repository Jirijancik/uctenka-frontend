import { gql } from '@apollo/client';
import { Enterprise } from '../../../../types/schemas/Enterprise';

export const EDIT_ENTERPRISE = gql`
  mutation editEnterprise($input: EditEnterpriseInput!, $id: String) {
    editEnterprise(input: $input, _id: $id) {
      _id
    }
  }
`;

export type EditEnterpriseInput = { input: Partial<Enterprise> };
export type EditEnterpriseResponse = { editEnterprise: { _id: Enterprise['_id'] } };
export type EditEnterpriseVariables = { input: EditEnterpriseInput; _id: Enterprise['_id'] };
