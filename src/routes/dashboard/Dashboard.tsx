import React, { useState } from 'react';
import { Button, Card, PageHeader } from 'antd';

export function Dashboard(): JSX.Element {
  //

  return (
    <div>
      <Card>
        <PageHeader title="Hi welcome here" />
        <p>I am uctenka app. So far I can only add a new Invoice. Please give it a try!</p>
      </Card>
    </div>
  );
}
