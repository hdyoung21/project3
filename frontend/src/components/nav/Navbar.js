import React, { useState, useEffect } from 'react';
import './Navbar.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/users/me');
            setUser(data);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleLogout = async () => {
        try{
            await axios.get('/api/auth/logout');
            setUser(null);
            navigate('/auth');
        }
        catch(err) {
            console.log(err);
        }
    }

    if (!user) return null;

    return (
        <header>
            <div className="userInfo">

                <div>
                    <h1 className="name">{user.name}</h1>
                    <h1 className="email">{user.email}</h1>
                    <Link to='/edit-profile' className="editBtn">Edit</Link>
                </div>
            </div>
            <nav>
                <button type='button' className="logout" onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
}

export default Navbar;