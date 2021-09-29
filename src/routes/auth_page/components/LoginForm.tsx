import React from "react";

import { useLazyQuery } from "@apollo/client";
import { Button, Checkbox, Form, Input } from "antd";
import { LOGIN_USER } from "../../../graphql/queries/User";

export function LoginForm() {
  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  const onFinish = (values: any) => {
    loginUser({
      variables: {
        ...values,
      },
    });
    console.log("Success:", data, values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo, error);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ marginTop: 80 }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        {error && error.message}
      </Form>
    </>
  );
}
