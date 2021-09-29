import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { Button } from "antd";
export function AuthPage() {
  const [showingLogin, setShowingLogin] = useState(true);

  return (
    <div>
      <Button onClick={() => setShowingLogin(!showingLogin)} title="Register">
        SWAP FORMS
      </Button>
      {showingLogin ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
    </div>
  );
}
