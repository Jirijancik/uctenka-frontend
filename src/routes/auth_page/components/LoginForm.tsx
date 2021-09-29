import React, { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../graphql/mutations/User";
import { Button, Checkbox, Form, Input } from "antd";

export function LoginForm() {
  const [loginData, setLoginData] = useState();
  const [sessionData, setSessionData] = useState();
  const [logoutData, setLogoutData] = useState();

  const [loginUser] = useMutation(LOGIN_USER);

  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();

    const target: any = e.target;
    const email = target.email.value;
    const password = target.password.value;

    loginUser({
      variables: {
        email,
        password,
      },
    })
      .then((result) => console.log(result, "result"))
      .catch((error) => console.log(error));
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
