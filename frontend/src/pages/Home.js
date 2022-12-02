import Layout from '../components/Layout.js';
import React from 'react'
import Navbar from '../components/nav/Navbar.js';
import ProjectList from '../components/projects/ProjectList.js';


function Home() {
  return (
    <Layout>
      <Navbar />
      <ProjectList />
    </Layout>
  )
}

export default Home;

