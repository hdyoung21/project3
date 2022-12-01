import React, { useState } from 'react';
import classes from './Navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/users/me');
            setUser(data)
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();

    }, [])

    const handleLogout = async () => {
        try{
            await axios.get('/api/auth/logout');
            setUser(null);
            toast.success('User Logged Out');
            navigate('/auth')
        }
        catch(err) {
            console.log(err);
        }
    }

    if (!user) return null;

    return (
        <header>
            <div className={classes.userInfo}>

                <div>
                    <h1 className={classes.name}>{user.name}</h1>
                    <h1 className={classes.email}>{user.email}</h1>
                    <link to='/edit-profile' className={classes.editBtn}>Edit</link>
                </div>
            </div>
            <nav>
                <button type='button' className={classes.logout} onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    )
}

export default Navbar