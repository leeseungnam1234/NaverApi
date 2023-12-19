/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route, Routes, useNavigate, Link  } from 'react-router-dom'
import HomeView from './views/HomeView'
import Login from './utill/login'
import Signup from './utill/signup'
import PasswordRecovery from './utill/PasswordRecovery'

const App = () => {
    const navigate = useNavigate()

    const handleForgotPasswordClick = () => {
      // "비밀번호 찾기" 버튼 클릭 시 비밀번호 복구 경로로 이동
        navigate('/passwordRecovery')
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/passwordRecovery' element={<PasswordRecovery/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App