import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import { VFC } from 'react';

export const CreateEnterpriseButton: VFC<ButtonProps> = props => (
  <Button
    data-cy="establishment-create-btn"
    icon={<PlusOutlined />}
    shape="circle"
    size="large"
    type="primary"
    {...props}
  />
);
