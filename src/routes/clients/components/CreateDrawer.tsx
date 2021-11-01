import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React from 'react';
import { BusinessType } from '../../../types/businessType';
import { Currency } from '../../../types/currency';
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
      <Form layout="vertical" name="create-client" onFinish={(values: any) => console.log(values)}>
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
              <Select
                options={Object.keys(Currency).map(item => ({
                  label: Currency[item as keyof typeof Currency],
                  value: item,
                }))}
                placeholder="Please select a currency"
              />
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
              <Select
                options={Object.keys(PaymentTerms).map(item => ({
                  label: PaymentTerms[item as keyof typeof PaymentTerms],
                  value: item,
                }))}
                placeholder="Please choose the payment type"
              />
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
              <Select
                options={Object.keys(BusinessType).map(item => ({
                  label: BusinessType[item as keyof typeof BusinessType],
                  value: item,
                }))}
                placeholder="Please choose the Type of bussiness"
              />
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
              <Select
                options={Object.keys(PaymentMethod).map(item => ({
                  label: PaymentMethod[item as keyof typeof PaymentMethod],
                  value: item,
                }))}
                placeholder="Please choose the Type of bussiness"
              />
            </Form.Item>
          </Col>
        </Row>

        <Space>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>

          <Button type="dashed" onClick={onClose}>
            Close
          </Button>
        </Space>
      </Form>
    </Drawer>
  );
};
