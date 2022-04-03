import { MutationFunctionOptions, useMutation } from '@apollo/client';
import { notification } from 'antd';
import { CreateEnterpriseInput, CREATE_ENTERPRISE } from './mutations/create';

type MutationOptions = MutationFunctionOptions<null, CreateEnterpriseInput>;

interface UseCreateEnterpriseShape {
  isCreating: boolean;
  create: (baseOptions: MutationOptions) => void;
}

const defaultOptions: Pick<MutationOptions, 'onCompleted' | 'onError'> = {
  onCompleted() {
    console.log('WTF');

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

  const handleCreate = (baseOptions: MutationOptions) => {
    createEnterprise({
      ...defaultOptions,
      ...baseOptions,
      onCompleted() {
        console.log('WTF');

        notification.success({
          message: 'Enterprise Created',
        });
      },
    });
  };

  return { create: handleCreate, isCreating };
}
