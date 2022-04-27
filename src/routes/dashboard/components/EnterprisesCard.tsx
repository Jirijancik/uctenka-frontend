import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Card, notification, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useHistory } from 'react-router';
import {
  DashboardEnterpriseRecord,
  DashboardEnterpriseResponse,
  GET_DASHBOARD_ENTERPRISES,
} from '../queries/getEnterprises';

const getColumns = (): ColumnsType<DashboardEnterpriseRecord> => [
  {
    title: 'Name',
    dataIndex: ['name'],
    key: 'name',
  },
];

export const EnterprisesCard: React.VFC = () => {
  const history = useHistory();

  const { data, loading } = useQuery<DashboardEnterpriseResponse>(GET_DASHBOARD_ENTERPRISES, {
    onError(err) {
      notification.error({
        message: `Error: ${err.name}`,
        description: err.message,
      });
      console.error(err);
    },
    fetchPolicy: 'network-only',
  });

  const columns = getColumns();

  return (
    <Card loading={loading} title="Enterprises">
      {!data ? (
        <>
          <div>Currently you have no businesses, try to add one!</div>
          <Button
            icon={<PlusOutlined />}
            shape="circle"
            size="large"
            type="primary"
            onClick={() => history.push('/enterprises')}
          />
        </>
      ) : (
        <Table columns={columns} dataSource={data.enterprises} />
      )}
    </Card>
  );
};
