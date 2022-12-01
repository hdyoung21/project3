import React from 'react'
import Layout from '../components/Layout';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import classes from './Auth.css';

function Auth() {
  return (
    <Layout>
      <div className={classes.form_container}>
        <Login />
        <Register />
      </div>
    </Layout>
  )
}

export default Auth;