import { useLazyQuery } from '@apollo/client';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { LOGIN_USER } from '../../../graphql/queries/User';
import { useSessionContext } from '../../../Router/SessionContext';

interface LoginUserResponse {
  loginUser: {
    token: string;
    user: {
      username: string;
    };
  };
}

interface LoginUserInput {
  name: string;
  email: string;
  password: string;
}

export const LoginForm: React.VFC = () => {
  const history = useHistory();

  const [session, setSession] = useSessionContext();

  const onLoginIn = ({ loginUser }: LoginUserResponse) => {
    sessionStorage.setItem('token', loginUser.token);
    sessionStorage.setItem('user', loginUser.user.username);
    setSession({ ...session, isAuthenticated: true });
    history.push('/dashboard');
  };

  const [fetchLoginUser, { error }] = useLazyQuery(LOGIN_USER, {
    onCompleted: onLoginIn,
  });

  const onFinish = (values: LoginUserInput) => {
    fetchLoginUser({
      variables: {
        ...values,
      },
    });
  };

  return (
    <Form
      autoComplete="off"
      initialValues={{ remember: true }}
      labelCol={{ span: 8 }}
      name="basic"
      style={{ marginTop: 80 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>

      {error && (
        <>
          <h1>{error.message}</h1>
          <div>{error.extraInfo}</div>
          <div>{error.stack}</div>
        </>
      )}
    </Form>
  );
};
