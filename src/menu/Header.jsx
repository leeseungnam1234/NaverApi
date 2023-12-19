import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <Navbar expand="lg" className="bg-secondary-subtle">
        <Container fluid>
          <Navbar.Brand href="#" id='homelogo'>Naver Api Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">홈</Nav.Link>
              <Nav.Link href="#action2">뉴스</Nav.Link>
              <NavDropdown title="백과사전, 블로그" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">백과사전</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  블로그
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  책
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="검색"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">검색</Button>
            </Form>
              <Link to="/login">
                <Button variant="outline-primary" className="me-2" id='login'>
                  로그인
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline-secondary" id="ghldnjs">
                  회원가입
                </Button>
              </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header