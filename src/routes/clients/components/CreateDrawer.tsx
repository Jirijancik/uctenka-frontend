import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React from 'react';
import { BusinessType } from '../../../types/businessType';
import { PaymentMethod } from '../../../types/paymentMethod';
import { PaymentTerms } from '../../../types/paymentTerms';

const { Option } = Select;

export const CreateClientDrawer: React.VFC<{ isVisible: boolean; setIsVisible: (state: boolean) => void }> = ({
  isVisible,
  setIsVisible,
}) => {
  const onClose = () => {
    setIsVisible(false);
  };
  return (
    <Drawer
      bodyStyle={{ paddingBottom: 80 }}
      title="Create a new client"
      visible={isVisible}
      width={720}
      onClose={onClose}
    >
      <Form hideRequiredMark layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter user name' }]}>
              <Input placeholder="Please enter client name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Unified VAT number"
              name="unifiedVatNumber"
              rules={[{ required: true, message: 'Please enter Unified VAT number' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="VAT number"
              name="vatNumber"
              rules={[{ required: true, message: 'Please enter VAT number' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Currency" name="currency" rules={[{ required: true, message: 'Please enter currency' }]}>
              <Select placeholder="Please select an owner">
                <Option value="CZK">CZK</Option>
                <Option value="EUR">EUR</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Account balance" name="accountBalance">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Payment terms" name="paymentTerms">
              <Select placeholder="Please choose the payment type">
                <Option value={PaymentTerms.AfterTwoWeeks}>{PaymentTerms.AfterTwoWeeks}</Option>
                <Option value="public">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Contact person" name="contactPerson">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please choose the email' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: 'Please choose the country' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Street" name="street" rules={[{ required: true, message: 'Please choose the street' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please choose the city' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Postcode"
              name="postcode"
              rules={[{ required: true, message: 'Please choose the postcode' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Mobile phone"
              name="mobilePhone"
              rules={[{ required: true, message: 'Please choose the mobilePhone' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Type of bussiness"
              name="typeOfBussiness"
              rules={[{ required: true, message: 'Please choose the Type of bussiness' }]}
            >
              <Select placeholder="Please choose the Type of bussiness">
                <Option value={BusinessType.Company}>{BusinessType.Company}</Option>
                <Option value={BusinessType.PrivatePerson}>{BusinessType.PrivatePerson}</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Account number" name="accountNumber">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Payment method" name="paymentMethod">
              <Select placeholder="Please choose the Type of bussiness">
                <Option value={PaymentMethod.Account}>{PaymentMethod.Account}</Option>
                <Option value={PaymentMethod.Account}>{PaymentMethod.Account}</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            Submit
          </Button>
        </Space>
      </Form>
    </Drawer>
  );
};
