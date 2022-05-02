import { MutationFunctionOptions } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { notification } from 'antd';
import { CreateEnterpriseInput, CREATE_ENTERPRISE } from './mutations/create';

type MutationOptions = MutationFunctionOptions<null, CreateEnterpriseInput>;

interface UseCreateEnterpriseShape {
  isCreating: boolean;
  create: (baseOptions: MutationOptions) => void;
}

const defaultOptions: Pick<MutationOptions, 'onCompleted' | 'onError'> = {
  onCompleted() {
    notification.success({
      message: 'Enterprise Created',
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

export function useCreateEnterprise(): UseCreateEnterpriseShape {
  const [createEnterprise, { loading: isCreating }] = useMutation<null, CreateEnterpriseInput>(CREATE_ENTERPRISE);

  const handleCreate = (
    baseOptions: Pick<MutationOptions, 'onCompleted' | 'onError' | 'refetchQueries' | 'variables'>,
  ) => {
    createEnterprise({
      ...defaultOptions,
      ...baseOptions,
    });
  };

  return { create: handleCreate, isCreating };
}
