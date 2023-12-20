/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import HomeView from './views/HomeView'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App