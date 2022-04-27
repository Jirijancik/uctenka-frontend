import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Popconfirm, Row, Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { VFC } from 'react';
import { useDeleteEnterprise, UseDeleteEnterpriseShape } from '../../../api/graphql/enterprise/useDelete';
import { EnterpriseRecord, GET_ENTERPRISES } from '../../../graphql/queries/getEnterprises';
import { CreateEnterpriseButton } from './CreateButton';

const getColumns = (
  handleDelete: UseDeleteEnterpriseShape['delete'],
  handleEdit: ClintListProps['onEdit'],
): ColumnsType<EnterpriseRecord> => [
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
        <Tooltip title="To edit Establishment">
          <Button icon={<EditOutlined />} type="link" onClick={handleEdit} />
        </Tooltip>

        <Tooltip title="To delete Establishment">
          <Popconfirm
            title="Sure to permanently delete this establishment?"
            onConfirm={() =>
              handleDelete({ variables: { id: { _id: record._id } }, refetchQueries: [GET_ENTERPRISES] })
            }
          >
            <Button danger icon={<DeleteOutlined />} type="link" />
          </Popconfirm>
        </Tooltip>
      </Row>
    ),
  },
];

interface ClintListProps {
  data: EnterpriseRecord[];
  isLoading: boolean;
  onCreate: () => void;
  onEdit: () => void;
}

export const ClientsList: VFC<ClintListProps> = ({ data, isLoading, onCreate, onEdit }) => {
  const { delete: handleDelete, isDeleting } = useDeleteEnterprise();

  const columns = getColumns(handleDelete, onEdit);

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
