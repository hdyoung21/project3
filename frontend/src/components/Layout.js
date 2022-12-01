import React from 'react';
import classes from './Layout.css';

function Layout({children}) {
  return (
    <main className={classes.containter}>{children}</main>
  )
}

export default Layout