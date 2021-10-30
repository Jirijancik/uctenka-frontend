import { Button, Card, Col, PageHeader, Row } from 'antd';
import React from 'react';

export const ClientsPage: React.VFC = () => (
  <div>
    <Card>
      <PageHeader title="Clients" />
      <p>eyo</p>
    </Card>
    <Row>
      <Col span={5}>
        <Card title="Clients">
          <div>Currently you have no clients, try to add one</div>
          <Button shape="circle" size="large" type="primary">
            +
          </Button>
        </Card>
      </Col>
    </Row>
  </div>
);
