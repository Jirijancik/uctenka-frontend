import { Button, Col, Drawer, Form, Input, InputNumber, notification, Row, Select, Space } from 'antd';
import React from 'react';
import { EditEnterpriseVariables } from '../../../api/graphql/enterprise/mutations/edit';
import { useEditEnterprise } from '../../../api/graphql/enterprise/useEdit';
import { GET_ENTERPRISES } from '../../../graphql/queries/getEnterprises';
import { BusinessType } from '../../../types/businessType';
import { Currency } from '../../../types/currency';
import { PaymentMethod } from '../../../types/paymentMethod';
import { PaymentTerms } from '../../../types/paymentTerms';

const { Option } = Select;

export const EditBusinessDrawer: React.VFC<{ isVisible: boolean; setIsVisible: (state: boolean) => void }> = ({
  isVisible,
  setIsVisible,
}) => {
  const onClose = () => {
    setIsVisible(false);
  };

  const { edit, isEditing } = useEditEnterprise();

  return (
    <Drawer
      bodyStyle={{ paddingBottom: 80 }}
      title="Edit a new client"
      visible={isVisible}
      width={720}
      onClose={onClose}
    >
      <Form
        layout="vertical"
        name="create-client"
        onFinish={(newEnterprise: EditEnterpriseVariables) => {
          edit({
            variables: newEnterprise,
            onCompleted() {
              onClose();
              console.log(isVisible, ' isVisible');
              notification.success({
                message: 'Enterprise Created',
              });
            },
            refetchQueries: [GET_ENTERPRISES],
          });
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter user name', min: 3 }]}>
              <Input placeholder="Please enter client name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Unified VAT number"
              name="unifiedVatNumber"
              rules={[{ required: true, message: 'Please enter Unified VAT number' }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="VAT number" name="vatNumber">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Currency" name="currency" rules={[{ required: true, message: 'Please enter currency' }]}>
              <Select
                options={Object.keys(Currency).map(item => ({
                  label: item,
                  value: Currency[item as keyof typeof Currency],
                }))}
                placeholder="Please select a currency"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Payment terms" name="paymentTerms">
              <Select
                options={Object.keys(PaymentTerms).map(item => ({
                  label: item,
                  value: PaymentTerms[item as keyof typeof PaymentTerms],
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
              <InputNumber />
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
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Type of bussiness"
              name="bussinessType"
              rules={[{ required: true, message: 'Please choose the Type of bussiness' }]}
            >
              <Select
                options={Object.keys(BusinessType).map(item => ({
                  label: item,
                  value: BusinessType[item as keyof typeof BusinessType],
                }))}
                placeholder="Please choose the Type of bussiness"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Account number" name="accountNumber">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Payment method" name="paymentMethod">
              <Select
                options={Object.keys(PaymentMethod).map(item => ({
                  label: item,
                  value: PaymentMethod[item as keyof typeof PaymentMethod],
                }))}
                placeholder="Please choose the Type of bussiness"
              />
            </Form.Item>
          </Col>
        </Row>

        <Space>
          <Button htmlType="submit" loading={isEditing} type="primary">
            Submit
          </Button>

          <Button loading={isEditing} type="dashed" onClick={onClose}>
            Close
          </Button>
        </Space>
      </Form>
    </Drawer>
  );
};
