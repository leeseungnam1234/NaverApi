import React , { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

const Header = () => {
    // 검색어를 저장할 상태
    const [searchQuery, setSearchQuery] = useState('');

    // 검색 로직을 처리하는 함수
    // 'searchQuery' 상태를 기반으로 검색 로직을 수행
    const handleSearch = () => {

        // 여기에 실제 검색 논리를 추가
        console.log('Searching for:', searchQuery);

      }

    return (
    <Navbar expand="lg" className="bg-secondary-subtle">
        <Container fluid>
            <Navbar.Brand href="/" id='homelogo'>Naver Api Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    id='nav1'
                >
                <Nav.Link href="/">홈</Nav.Link>
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
            </Navbar.Collapse>
        </Container>

            <div className='div-1'>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="검색"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="outline-success" className="search1" onClick={handleSearch}>
                    검색
                    </Button>
                </Form>
                <div className='button1'>
                    <Link to="/login">
                    <Button   Button variant="outline-primary" className="me-2" id='login'>
                        로그인
                    </Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="outline-secondary" id="ghldnjs">
                            회원가입
                        </Button>
                    </Link>
                </div>
            </div>

        </Navbar>
    )
}

export default Header