import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 백엔드 비밀번호 복구 프로세스 시뮬레이션
        try {
        // 백엔드 API를 호출하여 비밀번호 복구 처리
        // 이 예에서는 가상의 비밀번호 복구 함수를 사용
        await passwordRecovery(email);

        // 성공 메시지 표시
        setMessage('귀하의 이메일로 비밀번호 복구 지침이 전송되었습니다.');
        setError('');
        } catch (err) {
            
        // 오류 처리, 오류 메시지 표시 등
        setMessage('');
        setError('Error: 비밀번호 복구를 처리할 수 없습니다.');
        }
    };

    const passwordRecovery = async (userEmail) => {
        // 백엔드 비밀번호 복구 프로세스 시뮬레이션
        // 실제 시나리오에서는 여기에서 백엔드에 대한 API 호출을 수행합니다.
        return new Promise((resolve, reject) => {
        // API 호출 지연 시뮬레이션
        setTimeout(() => {
            // 성공적인 비밀번호 복구 시뮬레이션
            resolve();
        }, 2000);
        });
    };

    return (
        <Container className="my-5">
        <h2 className="text-center mb-4">비밀번호 복구</h2>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control
                type="email"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
            암호 재설정
            </Button>
        </Form>
        </Container>
    );
};

export default PasswordRecovery;