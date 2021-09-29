import React from "react";
import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../graphql/mutations/User";

export function RegisterForm() {
  const [registerUser] = useMutation(REGISTER_USER);

  const onFinish = (values: any) => {
    const newUser = values;
    registerUser({
      variables: {
        newUser,
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("done:", values);
  };

  return (
    <>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
