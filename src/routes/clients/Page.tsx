import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, PageHeader, Row } from 'antd';
import React, { useState } from 'react';
import { CreateClientDrawer } from './components/CreateDrawer';

export const ClientsPage: React.VFC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Card>
        <PageHeader title="Clients" />
        <p>eyo</p>
      </Card>
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

      <CreateClientDrawer isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};
