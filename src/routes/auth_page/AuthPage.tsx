import { Button, Col, Layout, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSessionContext } from '../../Router/SessionContext';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export const AuthPage: React.VFC = () => {
  const [showingLogin, setShowingLogin] = useState(true);

  return (
    <Layout>
      <Header style={{ padding: 50, height: 'auto' }}>
        <Title style={{ padding: 0, color: 'white', margin: 0 }}>Účtenka</Title>
      </Header>
      <Content style={{ height: '80vh', overflow: 'auto' }}>
        <Row align="middle" justify="center">
          {showingLogin ? <LoginForm /> : <RegisterForm onRegister={setShowingLogin} />}
        </Row>
      </Content>
      <Footer>
        <Row align="middle" justify="center">
          <Col>
            <Title level={4}>You don't have an accout? Register here!</Title>
            <Row align="middle" justify="center">
              <Button
                data-cy={showingLogin ? 'login-button-go-to-register' : 'login-button-go-to-login'}
                title={showingLogin ? 'Register' : 'Login'}
                onClick={() => setShowingLogin(!showingLogin)}
              >
                {showingLogin ? 'Register' : 'Login'}
              </Button>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};
