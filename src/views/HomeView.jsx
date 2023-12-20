import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../Footer/Footer'
import Login from '../login/login'
import Signup from '../utill/signup'
import PasswordRecovery from '../utill/PasswordRecovery'

const HomeView = () => {
    return (
        <>
            <Header/>
            <Main>
                <Login/>
                <Signup/>
                <PasswordRecovery/>
            </Main>
            <Footer/>
        </>
    )
}

export default HomeView

