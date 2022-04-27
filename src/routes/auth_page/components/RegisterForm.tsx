import { useMutation } from '@apollo/client';
import { Button, Col, Form, Input, notification, Typography } from 'antd';
import React from 'react';
import { CreateUserData, CreateUserVariables, CREATE_USER } from '../../../graphql/mutations/User';

const { Title } = Typography;

interface RegisterUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const RegisterForm: React.VFC<{ onRegister: (showingLOgin: boolean) => void }> = ({ onRegister }) => {
  const [createUser] = useMutation<CreateUserData, CreateUserVariables>(CREATE_USER, {
    onCompleted(response) {
      notification.success({
        message: 'User created!',
        description: `Proceed to log in as ${response.createUser.email}`,
      });
      onRegister(true);
    },
    onError(error) {
      notification.error({
        message: `Error: ${error.name}!`,
        description: `There was an error creating the user: ${error.message}`,
      });
      console.error(error);
    },
  });

  const onFinish = (values: RegisterUserInput) => {
    const newUser = values;
    createUser({
      variables: {
        newUser,
      },
    });
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
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
        >
          <Input autoComplete="off" data-cy="register-email" />
        </Form.Item>

        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[{ required: true, message: 'Please input your firstName!' }]}
        >
          <Input data-cy="register-first-name" />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[{ required: true, message: 'Please input your lastName!' }]}
        >
          <Input data-cy="register-last-name" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!', min: 4, max: 50 }]}
        >
          <Input.Password data-cy="register-password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button data-cy="register-btn" htmlType="submit" type="primary">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
