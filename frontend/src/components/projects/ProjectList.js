import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem.js';
import './ProjectList.css';

function ProjectList() {
    const [ProjectList, setProjectList] = useState([]);

    const [isAddingNew, setIsAddingNew] = useState(false);
    const [newProject, setNewProject] = useState('');

    const getProjects = async () => {
    try{
        const { data } = await axios.get('/api/projects/myProjects');
        setProjectList(
            data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
    }catch (err) {
        console.log(err);

        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    const addNewButtonClick = () => {
        setIsAddingNew(!isAddingNew);
    };

    const addNewProject = async (e) => {
        e.preventDefault();
        if (newProject.length <= 0) {
            console.log("empty project");
            return;
        }
        try {
            const { data } = await axios.post('/api/tasks', {
                name: newProject,
            });
            setIsAddingNew('New project added');
            setNewProject('');
            setProjectList([{ ...data }, ...ProjectList]);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProject = async (id) => {
        try{
            await axios.delete(`/api/projects/${id}`);
            setProjectList(ProjectList.filter((project) => project._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
        <div className="topBar">
            <button type='button' className="addNew">Add New</button>
        </div>

        {isAddingNew && (
            <form className="addNewForm" onSubmit={addNewProject}>
                <input type="text" value={newProject} onChange={(e) => setNewProject(e.target.value)} placeholder="Project Name" />
                <button type="submit">Add</button>
            </form>
        )}

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