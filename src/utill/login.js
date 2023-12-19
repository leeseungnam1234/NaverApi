import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import  PasswordRecovery from './PasswordRecovery';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직을 추가할 수 있습니다.
    // 여기에서는 간단히 '/dashboard'로 이동하는 예시를 보여줍니다.
    navigate.push('/dashboard');
  };

  return (
    <Container className="mt-5">
      <h2 className='loginh2'>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email 이메일</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password 비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin}>
          로그인
        </Button>
        <Button variant="link" onClick={PasswordRecovery} className="forgot-password-button">
          비밀번호 찾기
        </Button>
      </Form>
    </Container>
  )
}

export default Login;