import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login.js';
import Register from '../components/auth/Register.js';
import Layout from '../components/Layout.js';
import useAuth from '../hooks/useAuth.js';
import './Auth.css';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <Layout>
      <div className="form_container">
        <Login />
        <Register />
      </div>
    </Layout>
  );
}

export default Auth;