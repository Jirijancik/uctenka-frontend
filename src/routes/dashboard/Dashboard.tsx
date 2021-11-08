import { Button, Card, Col, PageHeader, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

export const Dashboard: React.VFC = () => {
  const history = useHistory();

  return (
    <div>
      <Card>
        <PageHeader title="Hi welcome here" />
        <p>I am uctenka app. So far I can only add a new Invoice. Please give it a try!</p>
      </Card>
      <Row>
        <Col span={5}>
          <Card title="Enterprises">
            <div>Currently you have no businesses, try to add one!</div>
            <Button shape="circle" size="large" type="primary" onClick={() => history.push('/enterprises')}>
              +
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
