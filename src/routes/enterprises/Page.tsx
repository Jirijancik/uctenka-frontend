import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { CreateBusinessDrawer } from './components/CreateDrawer';

export const EnterprisesPage: React.VFC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

      <CreateBusinessDrawer isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};
