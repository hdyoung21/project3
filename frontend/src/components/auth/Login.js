import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './AuthForm.module.scss';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            await axios.post('/api/auth/login', {
                email,
                password
            });
            navigate('/');
            TransformStream.success('Login Success')
        }
        catch (err) {
            console.log(err);
        }
    };


    return (
        <div className={classes.register}>
            <h1 className={classes.title}>
                Login
            </h1>
            <form className={classes.authForm} onSubmit={login}>
                <label htmlFor='email'>
                    Email
                    <input type="email" name="email" placeholder="email" required />
                </label>
                <label htmlFor='password'>
                    password
                    <input type="password" name="password" placeholder="password" required />
                </label>
                <br />
                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Login