import { useMutation } from '@apollo/client';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { REGISTER_USER } from '../../../graphql/mutations/User';

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
    <Form
      autoComplete="off"
      initialValues={{ remember: true }}
      labelCol={{ span: 8 }}
      name="register"
      style={{ marginTop: 80 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="FirstName"
        name="firstName"
        rules={[{ required: true, message: 'Please input your firstName!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="LastName" name="lastName" rules={[{ required: true, message: 'Please input your lastName!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
