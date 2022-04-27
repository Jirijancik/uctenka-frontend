import { useMutation } from '@apollo/client';
import { Button, Checkbox, Col, Form, Input, Typography, notification, Alert } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { LoginUserData, LoginUserVariables, LOGIN_USER } from '../../../graphql/queries/loginUser';
import { useSessionContext } from '../../../Router/SessionContext';
import { getCookie } from '../../../utils/getCookie';

const { Title } = Typography;

interface LoginUserInput {
  email: string;
  password: string;
  remember: boolean;
}

export const LoginForm: React.VFC = () => {
  const history = useHistory();
  const [session, setSession] = useSessionContext();

  const onLoginIn = () => {
    setSession({
      ...session,
      isAuthenticated: getCookie('qid'),
      redirectPath: '/dashboard',
    });
    history.push('/dashboard');
  };

  const [fetchLoginUser, { error }] = useMutation<LoginUserData, LoginUserVariables>(LOGIN_USER, {
    onCompleted: () => {
      onLoginIn();
      notification.success({
        message: 'Sucess',
        description: 'Successful login',
      });
    },
    onError: err => {
      console.error(err);
    },
  });

  const onFinish = ({ email, password }: LoginUserInput) => {
    fetchLoginUser({
      variables: {
        user: { email, password },
      },
    });
  };

  return (
    <Col span={10}>
      <Title level={2} style={{ padding: 35, margin: 0, width: 'min-content' }}>
        Login
      </Title>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 4 }}
        name="login"
        title="Login"
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input data-cy="login-email" type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password data-cy="login-password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button data-cy="login-btn" htmlType="submit" type="primary">
            Login
          </Button>
        </Form.Item>

        {!!error && <Alert data-cy="unconfirmedEmail" message={error.message} type="error" />}
      </Form>
    </Col>
  );
};
