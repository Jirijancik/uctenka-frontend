import { useQuery } from '@apollo/client';
import { Col, notification, Row } from 'antd';
import React, { useState } from 'react';
import { EnterpriseResponse, GET_ENTERPRISES } from '../../graphql/queries/getEnterprises';
import { ClientsList } from './components/ClientList';
import { CreateBusinessDrawer } from './components/CreateDrawer';
import { EditBusinessDrawer } from './components/EditDrawer';

export const EnterprisesPage: React.VFC = () => {
  const [isCreatingVisible, setIsCreatingVisible] = useState(false);
  const [isEditingVisible, setIsEditingVisible] = useState(false);
  const { data, loading } = useQuery<EnterpriseResponse>(GET_ENTERPRISES, {
    onError(err) {
      notification.error({
        message: `Error: ${err.name}`,
        description: err.message,
      });
      console.error(err);
    },
    fetchPolicy: 'network-only',
  });

  return (
    <div>
      <Row>
        <Col span={24}>
          <ClientsList
            data={data?.enterprises ?? []}
            isLoading={loading}
            onCreate={() => setIsCreatingVisible(true)}
            onEdit={() => setIsEditingVisible(true)}
          />
        </Col>
      </Row>

      <CreateBusinessDrawer isVisible={isCreatingVisible} setIsVisible={setIsCreatingVisible} />
      <EditBusinessDrawer isVisible={isEditingVisible} setIsVisible={setIsEditingVisible} />
    </div>
  );
};
