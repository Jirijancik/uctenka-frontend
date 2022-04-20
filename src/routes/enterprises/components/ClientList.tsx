import { Card, Popconfirm, Row, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useState, VFC } from 'react';
import { useDeleteEnterprise, UseDeleteEnterpriseShape } from '../../../api/graphql/enterprise/useDelete';
import { EnterpriseRecord, GET_ENTERPRISES } from '../../../graphql/queries/getEnterprises';

const getColumns = (handleDelete: UseDeleteEnterpriseShape['delete']): ColumnsType<EnterpriseRecord> => [
  {
    title: 'Name',
    dataIndex: ['name'],
    key: 'name',
  },
  {
    title: 'Unified Vat Number',
    dataIndex: ['unifiedVatNumber'],
    key: 'unifiedVatNumber',
  },
  {
    title: 'Country',
    dataIndex: ['country'],
    key: 'country',
  },
  {
    title: 'City',
    dataIndex: ['city'],
    key: 'city',
  },
  {
    title: 'City',
    dataIndex: ['city'],
    key: 'city',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    key: 'operation',
    render: (_, record) => (
      <Row gutter={12}>
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete({ variables: { id: { _id: record._id } }, refetchQueries: [GET_ENTERPRISES] })}
        >
          <a>Delete</a>
        </Popconfirm>
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete({ variables: { id: { _id: record._id } }, refetchQueries: [GET_ENTERPRISES] })}
        >
          <a>Edit</a>
        </Popconfirm>
      </Row>
    ),
  },
];

export const ClientsList: VFC<{ data: EnterpriseRecord[]; isLoading: boolean }> = ({ data, isLoading }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { delete: handleDelete, isDeleting } = useDeleteEnterprise();

  const columns = getColumns(handleDelete);

  return (
    <Card loading={isLoading || isDeleting} title="Clients list">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
