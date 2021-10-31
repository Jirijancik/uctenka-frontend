import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

export const ClientsPage: React.VFC = () => {
  const [isVisibale, setIsVisibale] = useState(false);

  const showDrawer = () => {
    setIsVisibale(true);
  };

  const onClose = () => {
    setIsVisibale(false);
  };
  return (
    <Drawer
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            Submit
          </Button>
        </Space>
      }
      title="Create a new account"
      visible={isVisibale}
      width={720}
      onClose={onClose}
    >
      <Form hideRequiredMark layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter user name' }]}>
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Url" name="url" rules={[{ required: true, message: 'Please enter url' }]}>
              <Input addonAfter=".com" addonBefore="http://" placeholder="Please enter url" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Owner" name="owner" rules={[{ required: true, message: 'Please select an owner' }]}>
              <Select placeholder="Please select an owner">
                <Option value="xiao">Xiaoxiao Fu</Option>
                <Option value="mao">Maomao Zhou</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please choose the type' }]}>
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Approver"
              name="approver"
              rules={[{ required: true, message: 'Please choose the approver' }]}
            >
              <Select placeholder="Please choose the approver">
                <Option value="jack">Jack Ma</Option>
                <Option value="tom">Tom Liu</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="DateTime"
              name="dateTime"
              rules={[{ required: true, message: 'Please choose the dateTime' }]}
            >
              <DatePicker.RangePicker getPopupContainer={trigger => trigger.parentElement} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'please enter url description',
                },
              ]}
            >
              <Input.TextArea placeholder="please enter url description" rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
