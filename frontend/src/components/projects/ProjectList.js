import axios from 'axios';
import React, { useState, useInsertionEffect } from 'react';
import ProjectItem from './ProjectItem.js';
import './ProjectList.css';

function ProjectList() {
    const [ProjectList, setProjctList] = useState([]);

    const getProjects = async () => {
        try{
            const {data} = await axios.get('/api/projects/myProjects');
            setProjctList(
                data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
            );
        }catch (err) {
            console.log(err);
        }
    };

    useInsertionEffect(() => {
        getProjects();
    }, []);

    const deleteProject = async (id) => {
        try{
            await axios.delete(`/api/projects/${id}`);
            setProjctList(ProjectList.filter((project) => project._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
        <div className="topBar">
            <button type='button' className="addNew">Add New</button>
        </div>
        {ProjectList.length > 0 ? (
            <table className="projectList_table" >
                <tbody>
                    {ProjectList.map((project) => (
                        <ProjectItem project={project} key={project._id} deleteProject={deleteProject} />
                    ))}
                </tbody>
            </table>
        ): ('No project found'
        )}
    </div>
  );
}

export default ProjectList;