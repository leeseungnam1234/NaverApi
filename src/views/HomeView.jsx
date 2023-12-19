import React from 'react'
import Header from '../menu/Header'
import Login from '../utill/login'
import Signup from '../utill/signup'

const HomeView = () => {
    return (
        <>
            <Header>
                <Login/>
                <Signup/>
            </Header>
            {/* <Main></Main> */}
            {/* <Footer></Footer> */}
        </>
    )
}

export default HomeView