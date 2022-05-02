/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MutationFunctionOptions } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { notification } from 'antd';
import { EditEnterpriseResponse, EditEnterpriseVariables, EDIT_ENTERPRISE } from './mutations/edit';

type MutationOptions = MutationFunctionOptions<EditEnterpriseResponse, EditEnterpriseVariables>;

export interface UseEditEnterpriseShape {
  isEditing: boolean;
  edit: (baseOptions: MutationOptions) => void;
}

const defaultOptions: Pick<MutationOptions, 'onCompleted' | 'onError'> = {
  onCompleted() {
    notification.success({
      message: 'Enterprise deleted',
    });
  },
  onError(err) {
    notification.error({
      message: `Error: ${err.name}`,
      description: err.message,
    });
    console.error(err);
  },
};

export function useEditEnterprise(): UseEditEnterpriseShape {
  const [editEnterprise, { loading: isEditing }] = useMutation<EditEnterpriseResponse, EditEnterpriseVariables>(
    EDIT_ENTERPRISE,
  );

  const handleEdit = (
    baseOptions: Pick<MutationOptions, 'onCompleted' | 'onError' | 'refetchQueries' | 'variables'>,
  ) => {
    editEnterprise({
      ...defaultOptions,
      ...baseOptions,
    });
  };

  return { edit: handleEdit, isEditing };
}
