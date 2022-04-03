import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Card, Col, notification, Row } from 'antd';
import React, { useState } from 'react';
import { EnterpriseResponse, GET_ENTERPRISES } from '../../graphql/queries/getEnterprises';
import { ClientsList } from './components/ClientList';
import { CreateBusinessDrawer } from './components/CreateDrawer';

export const EnterprisesPage: React.VFC = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        <Col span={5}>
          <Card title="Clients">
            <div>Currently you have no clients, try to add one</div>
            <Button
              icon={<PlusOutlined />}
              shape="circle"
              size="large"
              type="primary"
              onClick={() => setIsVisible(true)}
            />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ClientsList data={data?.enterprises ?? []} isLoading={loading} />
        </Col>
      </Row>

      <CreateBusinessDrawer isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};
