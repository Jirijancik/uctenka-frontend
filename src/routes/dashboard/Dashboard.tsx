import { Card, PageHeader } from 'antd';
import React from 'react';

export const Dashboard: React.VFC = () => (
  <div>
    <Card>
      <PageHeader title="Hi welcome here" />
      <p>I am uctenka app. So far I can only add a new Invoice. Please give it a try!</p>
    </Card>
  </div>
);
