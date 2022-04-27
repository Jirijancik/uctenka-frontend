import { ContainerOutlined, ProjectOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout as AntLayout, Menu, Row, Space } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Layout.css';

const { Header, Content, Footer, Sider } = AntLayout;
const { SubMenu } = Menu;

function deleteCookie(name: string) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export const Layout: React.FC = props => {
  const { children } = props;

  const logOutUser = () => {
    deleteCookie('qid');
    window.location.reload();
  };

  return (
    <AntLayout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo">UCTENKA</div>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
          <Menu.Item key="1" icon={<ProjectOutlined />}>
            <Link data-cy="menu-item-dashboard" to="dashboard">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProjectOutlined />}>
            <Link data-cy="menu-item-enterprises" to="enterprises">
              Enterprises
            </Link>
          </Menu.Item>
          <SubMenu key="3" icon={<ContainerOutlined />} title="Faktury">
            <Link data-cy="menu-item-invoice-recieved" to="invoice-recieved">
              <Menu.Item key="31">Faktury Prijate</Menu.Item>
            </Link>
            <Link data-cy="menu-item-invoice-issued" to="invoice-issued">
              <Menu.Item key="32">Faktury Vydane</Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </Sider>
      <AntLayout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, backgroundColor: 'white' }}>
          <Row align="middle" justify="end">
            <Space style={{ paddingRight: 10 }}>
              JIRI JANCIK <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>JJ</Avatar>
              <Button
                data-cy="dashboard-logout-btn"
                style={{ color: '#f56a00', backgroundColor: '#fde3cf', height: '100%' }}
                type="default"
                onClick={() => logOutUser()}
              >
                LOGOUT
              </Button>
            </Space>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </AntLayout>
    </AntLayout>
  );
};
