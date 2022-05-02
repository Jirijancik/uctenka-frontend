/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MutationFunctionOptions } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { notification } from 'antd';
import { DeleteEnterpriseInput, DeleteEnterpriseResponse, DELETE_ENTERPRISE } from './mutations/delete';

type MutationOptions = MutationFunctionOptions<DeleteEnterpriseResponse, DeleteEnterpriseInput>;

export interface UseDeleteEnterpriseShape {
  isDeleting: boolean;
  delete: (baseOptions: MutationOptions) => void;
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

export function useDeleteEnterprise(): UseDeleteEnterpriseShape {
  const [deleteEnterprise, { loading: isDeleting }] = useMutation<DeleteEnterpriseResponse, DeleteEnterpriseInput>(
    DELETE_ENTERPRISE,
  );

  const handleDelete = (
    baseOptions: Pick<MutationOptions, 'onCompleted' | 'onError' | 'refetchQueries' | 'variables'>,
  ) => {
    deleteEnterprise({
      ...defaultOptions,
      ...baseOptions,
    });
  };

  return { delete: handleDelete, isDeleting };
}
