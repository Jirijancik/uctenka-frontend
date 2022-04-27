import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Popconfirm, Row, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { VFC } from 'react';
import { useDeleteEnterprise, UseDeleteEnterpriseShape } from '../../../api/graphql/enterprise/useDelete';
import { EnterpriseRecord, GET_ENTERPRISES } from '../../../graphql/queries/getEnterprises';
import { CreateEnterpriseButton } from './CreateButton';

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

export const ClientsList: VFC<{ data: EnterpriseRecord[]; isLoading: boolean; onCreate: () => void }> = ({
  data,
  isLoading,
  onCreate,
}) => {
  const { delete: handleDelete, isDeleting } = useDeleteEnterprise();

  const columns = getColumns(handleDelete);

  return (
    <Card extra={<CreateEnterpriseButton onClick={onCreate} />} loading={isLoading || isDeleting} title="Clients list">
      {data ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <>
          <div>Currently you have no clients, try to add one</div>
          <CreateEnterpriseButton onClick={onCreate} />
        </>
      )}
    </Card>
  );
};
