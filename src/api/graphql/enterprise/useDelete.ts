/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MutationFunctionOptions, useMutation } from '@apollo/client';
import { notification } from 'antd';
import { DeleteEnterpriseInput, DeleteEnterpriseResponse, DELETE_ENTERPRISE } from './mutations/delete';

type MutationOptions = MutationFunctionOptions<DeleteEnterpriseResponse, DeleteEnterpriseInput>;

export interface UseDeleteEnterpriseShape {
  isDeleting: boolean;
  delete: (baseOptions: MutationOptions) => void;
}

const defaultOptions: Pick<MutationOptions, 'onCompleted' | 'onError' | 'update'> = {
  onCompleted() {
    console.log('WTF');

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

  const handleDelete = (baseOptions: MutationOptions) => {
    deleteEnterprise({
      ...defaultOptions,
      ...baseOptions,
    });
  };

  return { delete: handleDelete, isDeleting };
}
