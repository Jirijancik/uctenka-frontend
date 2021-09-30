import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Layout as AntLayout, Menu } from "antd";
import { ContainerOutlined, ProjectOutlined } from "@ant-design/icons";
import "./Layout.css";

const { Header, Content, Footer, Sider } = AntLayout;
const { SubMenu } = Menu;

export function Layout(props: any) {
  const { children } = props;
  return (
    <AntLayout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo">UCTENKA</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<ProjectOutlined />}>
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="2" icon={<ContainerOutlined />} title="Faktury">
            <Link to="faktury">
              <Menu.Item key="3">Faktury Prijate</Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </Sider>
      <AntLayout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, backgroundColor: "white" }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </AntLayout>
    </AntLayout>
  );
}
