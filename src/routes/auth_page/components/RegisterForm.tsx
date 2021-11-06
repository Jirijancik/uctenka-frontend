import { useMutation } from '@apollo/client';
import { Button, Col, Form, Input, Typography } from 'antd';
import React from 'react';
import { REGISTER_USER } from '../../../graphql/mutations/User';

const { Title } = Typography;

interface RegisterUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const RegisterForm: React.VFC = () => {
  const [registerUser] = useMutation(REGISTER_USER);

  const onFinish = (values: RegisterUserInput) => {
    const newUser = values;
    registerUser({
      variables: {
        newUser,
      },
    })
      .then(response => console.warn(response))
      .catch(error => console.error(error));
  };

  return (
    <Col span={10}>
      <Title level={2} style={{ padding: 35, margin: 0, width: 'min-content' }}>
        Register
      </Title>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 4 }}
        name="register"
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input autoComplete="off" />
        </Form.Item>

        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[{ required: true, message: 'Please input your firstName!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[{ required: true, message: 'Please input your lastName!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button htmlType="submit" type="primary">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
