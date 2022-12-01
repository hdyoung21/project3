import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import EditProfile from './pages/EditProfile.js';
import Auth from './pages/Auth.js';
import PrivateRoutes from './components/PrivateRoutes.js';


function App() {
    return (
        <>
             <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/edit-profile' element={<EditProfile />}></Route>
                 </Route>
                <Route path='/auth' element={<Auth />}></Route>
            </Routes>
        </>
    );
}

export default App;