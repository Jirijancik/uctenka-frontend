import { Card, Col, PageHeader, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { EnterprisesCard } from './components/EnterprisesCard';

export const Dashboard: React.VFC = () => {
  const history = useHistory();

  return (
    <>
      <Card>
        <PageHeader title="Hi welcome here" />
        <p>I am uctenka app. So far I can only add a new Invoice. Please give it a try!</p>
      </Card>
      <Row>
        <Col span={5}>
          <EnterprisesCard />
        </Col>
      </Row>
    </>
  );
};
