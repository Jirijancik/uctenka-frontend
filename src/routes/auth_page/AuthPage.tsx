import React, { useState } from 'react';
import { Button } from 'antd';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

export function AuthPage() {
  const [showingLogin, setShowingLogin] = useState(true);

  return (
    <div>
      <Button title="Register" onClick={() => setShowingLogin(!showingLogin)}>
        SWAP FORMS
      </Button>
      {showingLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
