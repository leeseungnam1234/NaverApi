import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: '', // 이메일 확인을 위해 추가됨
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 백엔드 가입 및 이메일 확인 시뮬레이션
    try {
      // 백엔드 API를 호출하여 사용자 등록을 처리하고 이메일 확인을 보냄
      // 이 예에서는 가상의 가입 기능을 사용
      await signup(formData);

      // 성공 메시지를 표시하거나 성공 페이지로 리디렉션
      console.log('Verification email sent successfully!');
    } catch (error) {
      // 오류 처리, 오류 메시지 표시 등
      console.error('Error during signup:', error.message);
    }
  };

  const signup = async (userData) => {
    // 백엔드 가입 및 이메일 확인 시뮬레이션
    // 실제 시나리오에서는 여기에서 백엔드에 대한 API 호출을 수행
    return new Promise((resolve, reject) => {
      // API 호출 지연 시뮬레이션
      setTimeout(() => {
        // 성공적인 가입 시뮬레이션
        resolve();
      }, 2000);
    });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">회 원 가 입</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력해주세요."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            로그인시 사용될 이메일 입니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>비밀번호 재확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        {/* 이메일 확인 코드 필드를 포함 */}
        <Form.Group className="mb-3" controlId="formBasicVerificationCode">
          <Form.Label>이메일 인증 코드</Form.Label>
          <Form.Control
            type="text"
            placeholder="이메일에 있는 인증 코드를 입력해주세요."
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          확인
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;